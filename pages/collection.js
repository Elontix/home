import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";

import { MintAPi } from "./api/mint/mint";
import { useAccount, useDisconnect, useContractRead } from "wagmi";

import Mintbar from "../components/common/MintBar";
import ContestCard from "../components/cards/ContestCard";

const contractAddress = MintAPi.getAddress(true);
const contractAbi = MintAPi.getMintAbi(true);

const Collection = () => {
  console.log(contractAbi, contractAddress);
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const [tokenIds, setTokenIds] = useState([]);
  const [counter, setCounter] = useState(0);

  const connectWallet = () => {
    open();
    setDefaultChain(bsc);
  };

  const { data: collectionData, isSuccess: hasCollecitonSucess } =
    useContractRead({
      address: contractAddress,
      abi: contractAbi,
      args: [address, counter],
      functionName: "tokenOfOwnerByIndex",
      chainId: bsc.chainId,
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
    disconnect();
  }, []);

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
              CONNECT WALLET
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;
