import WinnerCard from "../cards/WinnerCard";

import { bscTestnet } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useContractRead, useDisconnect, useAccount } from "wagmi";
import { useState, useEffect } from "react";

import { MintAPi } from "../../pages/api/mint/mint.js";

const LatestWinner = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();

  const [counter, setCounter] = useState(0);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    open();
    setDefaultChain(bscTestnet);
    console.log(MintAPi.getMintAbi(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalWinners = useContractRead({
    address: "0xd23306DA2087CA5374F3F05DAB93D8F6189C3E46",
    abi: MintAPi.getMintAbi(false),
    functionName: "_drawsToDate",
    chainId: bscTestnet.chainId,
    account: address,
  });

  const {
    data: winnerData,
    error: winnerError,
    isError: hasWinnerError,
    isSuccess: hasWinnerSuccess,
  } = useContractRead({
    address: "0xd23306DA2087CA5374F3F05DAB93D8F6189C3E46",
    abi: MintAPi.getMintAbi(false),
    args: [counter],
    functionName: "draws",
    chainId: bscTestnet.chainId,
    account: address,
  });

  useEffect(() => {
    if (counter !== totalWinners.data && hasWinnerSuccess) {
      setCounter(counter + 1);
      let w = winners;
      w.push(winnerData);
      setWinners(w);
    }
    console.log(winners);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWinnerSuccess, counter]);

  return (
    <section className="latest-winner-section position-relative pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content mt-50" id="winnerTabContent">
              <div
                className="tab-pane fade show active"
                id="dream"
                role="tabpanel"
                aria-labelledby="dream-tab"
              >
                <div className="row mb-none-30">
                  <div className="mb-30">
                    {winners.map((winner, i) => (
                      <WinnerCard
                        key={i}
                        date={Number(winner[1])}
                        no={Number(winner[0])}
                        ticket={Number(winner[2])}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWinner;
