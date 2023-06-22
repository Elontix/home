import { useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { bscTestnet } from "wagmi/chains";

import { useAccount, useDisconnect, useContractRead } from "wagmi";
import Mintbar from "../components/common/MintBar";

import ContestCard from "../components/cards/ContestCard";
import { MintAPi } from "./api/mint/mint";

import contest_1 from "/public/images/contest/1.png";

const Collection = () => {
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const [tokenIds, setTokenIds] = useState([]);
  const [counter, setCounter] = useState(0);

  const connectWallet = () => {
    open();
    setDefaultChain(bscTestnet);
  };
  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  const { data: collectionData, isSuccess: hasCollecitonSucess } =
    useContractRead({
      address: MintAPi.getAddress(false),
      abi: MintAPi.getMintAbi(false),
      args: [address, counter],
      functionName: "tokenOfOwnerByIndex",
      chainId: bscTestnet.chainId,
      account: address,
    });

  const init = async () => {
    setTokenIds([...tokenIds, collectionData]);
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (isConnected) init().then().catch();
  }, [isConnected]);

  useEffect(() => {
    if (isConnected) {
      if (hasCollecitonSucess) {
        let isUpdated = false;
        for (let i = 0; i < tokenIds.length; i++) {
          if (tokenIds[i] === collectionData) {
            isUpdated = true;
          }
        }
        if (!isUpdated) init().then().catch();
      }
    }
    console.log(tokenIds);
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
                  {tokenIds.map((id, k) => (
                    <div key={k} className="col-xl-4 col-md-6 mb-30">
                      <ContestCard address={address} id={id} />
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
