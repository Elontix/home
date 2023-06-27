import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useContractRead, useDisconnect, useAccount } from "wagmi";
import { useState, useEffect } from "react";

import { MintAPi } from "../../pages/api/mint/mint.js";

import Mintbar from "./MintBar";
import WinnerCard from "../cards/WinnerCard";

const contractAddress = MintAPi.getAddress(true);
const contractAbi = MintAPi.getMintAbi(true);

const LatestWinner = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open, setDefaultChain } = useWeb3Modal();

  const [counter, setCounter] = useState(0);
  const [winners, setWinners] = useState([]);
  const [mints, setMints] = useState([]);

  const connectWallet = () => {
    open();
    setDefaultChain(bsc);
  };

  const totalWinners = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "_drawsToDate",
    chainId: bsc.chainId,
    account: address,
  });

  const {
    data: winnerData,
    error: winnerError,
    isError: hasWinnerError,
    isSuccess: hasWinnerSuccess,
    isFetched: hasWinnersFetched,
    isLoading: isWinnersLoading,
  } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    args: [counter],
    functionName: "ListOfDraws",
    chainId: bsc.chainId,
    account: address,
  });

  const {
    data: minted,
    error: mintError,
    isError: mintIsError,
    isSuccess: mintIsSuccess,
  } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    args: [mints[counter] || 100000],
    functionName: "isTokenMinted",
    chainId: bsc.chainId,
    account: address,
  });

  useEffect(() => {
    if (counter !== totalWinners.data && hasWinnerSuccess && mintIsSuccess) {
      let isUpdated = false;
      for (let i = 0; i < winners.length; i++)
        if (winners[i][2] === winnerData) isUpdated = true;

      if (!isUpdated) {
        setCounter(counter + 1);
        let w = winners;
        w.push({ ...winnerData, minted });
        let m = mints;
        m.push(minted);
        setWinners(w);
        setMints(m);
      }
    }
  }, [hasWinnerSuccess, counter]);

  useEffect(() => {
    disconnect();
  }, []);

  return (
    <section className="latest-winner-section position-relative pt-120 pb-120">
      <div className="container">
        <Mintbar />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {isConnected ? (
              <div className="tab-content mt-50" id="winnerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dream"
                  role="tabpanel"
                  aria-labelledby="dream-tab"
                >
                  <div className="row mb-none-30">
                    {isWinnersLoading && !hasWinnersFetched ? (
                      <div>Loading...</div>
                    ) : (
                      <div className="mb-30">
                        {winners.map((winner, i) => (
                          <WinnerCard
                            key={i}
                            date={Number(winner[1])}
                            no={Number(winner[0])}
                            ticket={Number(winner[2])}
                            isMinted={mints[i]}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div onClick={disconnect} className="cmn-btn">
                    Disconnect Wallet{" "}
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div onClick={connectWallet} className="cmn-btn">
                  Connect Wallet{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWinner;
