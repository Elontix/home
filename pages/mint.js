import mint from "../data/mint";
import Image from "next/image";
import TicketGif from "/public/images/ticket.gif";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect, useContractWrite } from "wagmi";
import {
  watchPendingTransactions,
  WatchPendingTransactionsResult,
} from "@wagmi/core";

import { useEffect, useState } from "react";
import { bscTestnet } from "wagmi/chains";
import { colors } from "../theme/color";
import { MintAPi } from "./api/mint/mint";
import { useMutation } from "@apollo/client";

import toast, { Toaster } from "react-hot-toast";
import { BiErrorAlt } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";

import Mintbar from "../components/common/MintBar";
import { NextFetchEvent } from "next/server";

function eToster(message, duration, bg, color, icon) {
  return toast.custom(
    <div
      style={{
        maxWidth: "820px",
        padding: "1rem",
        borderRadius: "1rem",
        background: bg,
        color: color,
        display: "flex",
        columnGap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div> {icon}</div>
      <p style={{ color: color }}> {message}</p>
    </div>,
    { duration: duration }
  );
}

function generateRandom(min = 0, max = 999) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  rand = String(rand).split("");

  return rand;
}

const Mint = () => {
  const [token, setToken] = useState(["0", "0", "0", "0", "0", "0"]);
  function updateRandomNumber() {
    setToken([...generateRandom()]);
  }

  function updateNumber(value, key) {
    let temp = token;
    temp[key] = value;
    setToken([...temp]);
  }
  function tokenStrip() {
    let n = "";
    for (let i = 0; i < token.length; i++) n += token[i];
    return Number(n);
  }

  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });
  const [createAccount, { data, loading, error, called }] = useMutation(
    MintAPi.createAccountGQL()
  );
  const connectWallet = () => {
    open();
    setDefaultChain(bscTestnet);
  };
  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  const updateWalletInformation = async () => {
    const { ip } = await fetch("https://api.ipify.org?format=json", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
    const { data } = await createAccount({
      variables: {
        address: address,
        ipAddress: ip,
      },
    });
  };

  useEffect(() => {
    updateWalletInformation().then().catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    write: mintWrite,
    data: mintData,
    error: mintError,
    isError: mintIsError,
    isSuccess: mintIsSuccess,
    status: mintStatus,
  } = useContractWrite({
    address: "0xd23306DA2087CA5374F3F05DAB93D8F6189C3E46",
    abi: MintAPi.getMintAbi(false),
    functionName: "mint",
    args: [address, tokenStrip(token)],
    chainId: bscTestnet.chainId,
    account: address,
    gas: 400000,
    maxFeePerGas: 400000,
    value: 1000000000000000,
  });

  const [counter, setCounter] = useState(0);

  console.log(mintIsSuccess);

  useEffect(() => {
    console.log(counter, mintStatus, mintIsSuccess);
    if (mintIsSuccess && counter < 4) {
      mintWrite();
      setCounter(counter + 1);
    }
  }, [counter, mintIsSuccess]);

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        <div className="row" style={{ rowGap: "2rem", columnGap: "0rem" }}>
          <div className="col-sm-12 col-lg-6 px-5">
            <div
              className="px-4 rounded"
              style={{
                textAlign: "center",
                backgroundImage:
                  "radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)",
                boxShadow: `0px 0px 12px -4px ${"black"}`,
              }}
            >
              <h3 className="py-4">Mint your ticket to reveal your NFT</h3>
              <Image height={320} width={520} src={TicketGif} alt="ok" />

              <div className="row py-4">
                <div className="col-6" style={{ textAlign: "left" }}>
                  <h4>ElonTix</h4>
                  <h4>Price</h4>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <h5 style={{ color: colors.baseColor }}>Edition #000001</h5>
                  <h5 style={{ color: colors.baseColor }}>eth0.2</h5>
                </div>
                <div
                  className="row"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  {token.map((i, k) => (
                    <input
                      key={k}
                      style={{
                        background: colors.bgOne,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "1rem .4rem",
                        borderRadius: "5px",
                        fontSize: "xl",
                        fontWeight: "bold",
                      }}
                      type="text"
                      value={i}
                      className="col"
                      maxlength="1"
                      onChange={(e) => updateNumber(e.target.value, k)}
                    />
                  ))}
                </div>
                <div className="p-4">
                  <h4
                    onClick={updateRandomNumber}
                    style={{ cursor: "pointer" }}
                  >
                    GENERATE RANDOM TICKET
                  </h4>
                  <div
                    style={{
                      width: "80%",
                      margin: "1rem auto",
                      height: "3px",
                      borderRadius: "20px",
                      background: "gray",
                    }}
                  ></div>
                  {isConnected ? (
                    <button
                      onClick={async () => {
                        mintWrite();
                        setCounter(1);
                        if (mintIsError) {
                          eToster(
                            mintError.message,
                            6000,
                            "red",
                            "white",
                            <BiErrorAlt size={48} />
                          );
                          return;
                        }
                        if (mintIsSuccess) {
                          eToster(
                            mintError.message,
                            3000,
                            "green",
                            "white",
                            <MdOutlineDoneOutline size={48} />
                          );
                        }

                        console.log(mintData);
                      }}
                      className="cmn-btn"
                    >
                      Buy Tickets
                    </button>
                  ) : (
                    <button onClick={connectWallet} className="cmn-btn">
                      connect wallet
                    </button>
                  )}
                </div>

                <div style={{ color: colors.baseColor }}>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div>Connected To</div>
                      <div>{isConnected ? addressStrip(address) : ""}</div>
                    </div>

                    <div>
                      {balanceFeteched
                        ? `${balance.formatted} ${balance.symbol}`
                        : 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 px-5">
            <div
              style={{ borderLeft: "2px dotted white", rowGap: "2rem" }}
              className="row px-3"
            >
              {mint.map((data, index) => (
                <div key={index}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "-42px",
                        color: "white",
                        width: "28px",
                        height: "28px",
                        background: colors.baseColor,
                        color: colors.bgOne,
                        textAlign: "center",
                        borderRadius: "1rem",
                        padding: ".2rem",
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="title">{data.header}</h3>
                    <span className="subtitle">{data.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <div className="bg-shape"></div>
    </>
  );
};

export default Mint;
