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

  const connectWallet = () => {
    open();
    setDefaultChain(bscTestnet);
  };
  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  // useEffect(() => {
  //   disconnect();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  const {
    data: collectionData,
    error: collectionError,
    isError: hasCollectionError,
    isSuccess: hasCollecitonSucess,
  } = useContractRead({
    address: MintAPi.getAddress(false),
    abi: MintAPi.getMintAbi(false),
    args: [address, 1],
    functionName: "tokenOfOwnerByIndex",
    chainId: bscTestnet.chainId,
    account: address,
  });

  const {
    data: tokenUriData,
    error: tokenUriError,
    isError: tokenUriIsError,
    isSuccess: tokenUriIsSuccess,
  } = useContractRead({
    address: MintAPi.getAddress(false),
    abi: MintAPi.getMintAbi(false),
    args: [1],
    functionName: "tokenURI",
    chainId: bscTestnet.chainId,
    account: address,
  });

  const getJson = async () => {
    try {
      let d = data;

      const f = await (await fetch(tokenUriData)).json();
      console.log(f);
      d.push({
        tokenId: collectionData,
        ...f,
      });
      setData([...d]);
      setCounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!hasCollectionError && hasCollecitonSucess) {
      let isUpdated = false;
      for (let i = 0; i < data.length; i++)
        if (collectionData === data[i].tokenId) isUpdated = true;
      if (!isUpdated) getJson();
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
                          id: itm.tokenId,
                          title: itm.name,
                          ticket_price: itm.description,
                          img: itm.image,
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
