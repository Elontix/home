import { useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { bscTestnet } from "wagmi/chains";

import { useAccount, useBalance, useDisconnect, useContractRead } from "wagmi";
import Mintbar from "../components/common/MintBar";

import ContestCard from "../components/cards/ContestCard";
import { MintAPi } from "./api/mint/mint";

import contest_1 from "/public/images/contest/1.png";

const Collection = () => {
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });
  const connectWallet = () => {
    open();
    setDefaultChain(bscTestnet);
  };
  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  useEffect(() => {
    disconnect();
  }, []);

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  const {
    data: collectionData,
    error: collectionError,
    isError: hasCollectionError,
    isSuccess: hasCollecitonSucess,
  } = useContractRead({
    address: "0xd23306DA2087CA5374F3F05DAB93D8F6189C3E46",
    abi: MintAPi.getMintAbi(false),
    args: [address, counter],
    functionName: "tokenOfOwnerByIndex",
    chainId: bscTestnet.chainId,
    account: address,
  });

  useEffect(() => {
    console.log(data);
    if (!hasCollectionError && hasCollecitonSucess) {
      let d = data;
      d.push(collectionData);
      setData([...d]);
      setCounter(counter + 1);
    }
  }, [counter, hasCollecitonSucess]);

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        {isConnected ? (
          <div className="tab-content mt-50" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="dream"
              role="tabpanel"
              aria-labelledby="dream-tab"
            >
              <div
                ame="tab-pane fade"
                id="laptop"
                role="tabpanel"
                aria-labelledby="laptop-tab"
              >
                <div className="row mb-none-30 mt-50">
                  {data.map((itm, k) => (
                    <div key={k} className="col-xl-4 col-md-6 mb-30">
                      <ContestCard
                        itm={{
                          id: "fh*3ja$^",
                          title: itm.toString(),
                          ticket_price: "3.99",
                          img: contest_1,
                          contest_no: "b2t",
                          day_remain: 5,
                          ticket_remain: 9805,
                          tags: ["dream_car"],
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-shape"></div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={connectWallet} className="cmn-btn">
              connect wallet
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;
