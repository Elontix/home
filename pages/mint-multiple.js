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
import { BiErrorAlt, BiTrash } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";

import Mintbar from "../components/common/MintBar";

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

function generateRandom(min = 100000, max = 999999) {
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
  const [tickets, setTickets] = useState([
    [0, 1, 2, 4, 5, 6],
    [1, 2, 5, 6, 7, 8],
  ]);

  useEffect(() => {
    console.log(counter, mintStatus, mintIsSuccess);
    if (mintIsSuccess && counter < 4) {
      mintWrite();
      setCounter(counter + 1);
    }
  }, [counter, mintIsSuccess]);

  function addTicket() {
    console.log(tickets);
    let tempTickets = tickets;
    tempTickets.push(token);
    setTickets([...tempTickets]);
  }

  function deleteTickets(index) {
    let tempTickets = [];
    for (let i = 0; i < tickets.length; i++) {
      if (index !== i) {
        tempTickets.push(tickets[i]);
      }
    }
    setTickets([...tempTickets]);
  }

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        <div className="row" style={{ rowGap: "2rem", alignItems: "center" }}>
          <div className="col-sm-12 col-lg-6">
            <div
              style={{
                textAlign: "center",
                backgroundImage:
                  "radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)",
                boxShadow: `0px 0px 12px -4px ${"black"}`,
              }}
              className="row px-3"
            >
              <h2 className="pt-5">Your Tickets</h2>
              <div>
                {!isConnected ? (
                  <div className="tag">Connect your wallet to add tickets</div>
                ) : null}
              </div>
              <div>
                {tickets.map((i, k) => (
                  <div
                    key={k}
                    style={{
                      background: colors.bgOne,
                      padding: ".8rem",
                      textAlign: "center",
                      display: "flex",
                      margin: "1rem",
                      borderRadius: "5px",
                      fontSize: "xl",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        columnGap: "1rem",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {i.map((j, l) => (
                        <div
                          key={l}
                          style={{
                            width: "100%",
                            background: colors.baseColor,
                            height: "40px",
                            width: "40px",
                            borderRadius: "30vh",
                            columnGap: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {j}
                        </div>
                      ))}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <BiTrash
                          //   onClick={() => deleteTickets(k)}
                          size={24}
                          color={colors.baseColor}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ paddingBottom: "2rem" }}>
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
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
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
                    <div
                      style={{ cursor: "pointer" }}
                      //   onClick={addTicket}
                      className="cmn-btn"
                    >
                      Add Ticket
                    </div>
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
        </div>
      </div>
      <Toaster />
      <div className="bg-shape"></div>
    </>
  );
};

export default Mint;
