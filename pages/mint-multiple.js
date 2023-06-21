import Image from "next/image";
import TicketGif from "/public/images/ticket.gif";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect, useContractWrite } from "wagmi";

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

function generateRandom(min = 0, max = 100000) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = String(rand + min);
  rand = rand.split("");
  let spliter = 6 - rand.length;
  for (let i = 0; i < spliter; i++) rand = ["0", ...rand];
  return rand;
}

const Mint = () => {
  const [token, setToken] = useState(["0", "0", "0", "0", "0", "0"]);
  function updateRandomNumber() {
    nftIdentifier();
    setToken([...generateRandom()]);
  }

  function typeColor(type) {
    if (type === "DIAMOND") return "#b9f2ff";
    if (type === "GOLD") return "#FFD700";
    if (type === "SILVER") return "#C0C0C0";
    if (type === "BRONZE") return " #CD7F32";
  }

  function updateNumber(value, key) {
    let temp = token;
    temp[key] = value;
    setToken([...temp]);
    nftIdentifier();
  }
  function tokenStrip() {
    let n = "";
    for (let i = 0; i < token.length; i++) n += token[i];
    return Number(n);
  }

  function nftIdentifier() {
    let stripedToken = tokenStrip(token);
    // diamond
    if (stripedToken < 5000) {
      setPrice(0.2);
      setType("DIAMOND");
    }
    // gold
    if (stripedToken > 5000 && stripedToken < 20000) {
      setPrice(0.1);
      setType("GOLD");
    }
    // silver
    if (stripedToken > 20000 && stripedToken < 50000) {
      setPrice(0.05);
      setType("SILVER");
    }
    // bronze
    if (stripedToken > 50000) {
      setPrice(0.03);
      setType("BRONZE");
    }
  }

  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
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
    address: MintAPi.getAddress(false),
    abi: MintAPi.getMintAbi(false),
    functionName: "mintMultiple",
    args: [address, [0, 2]],
    chainId: bscTestnet.chainId,
    account: address,
    value: 0.4 * 10 ** 16,
  });

  console.log(mintData, mintError);

  const [counter, setCounter] = useState(0);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    console.log(counter, mintStatus, mintIsSuccess);
    if (mintIsSuccess && counter < 4) {
      mintWrite();
      setCounter(counter + 1);
    }
  }, [counter, mintIsSuccess]);

  function addTicket() {
    let tempTickets = tickets;
    tempTickets.push({
      tokenId: [...token],
      price: price,
      type: type,
    });
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

  function totalPrice() {
    let price = 0;
    for (let i = 0; i < tickets.length; i++) price += tickets[i].price;
    return price;
  }

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        <div className="row" style={{ rowGap: "2rem" }}>
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
                  <h4>Ticket Type</h4>
                  <h4>Price</h4>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <h5 style={{ color: colors.baseColor }}>{type}</h5>

                  <h5 style={{ color: colors.baseColor }}>{price} BNB</h5>
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
                      onClick={addTicket}
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
                    className="row "
                    key={k}
                    style={{
                      background: colors.bgOne,
                      padding: "2rem 1rem",
                      textAlign: "center",
                      display: "flex",
                      margin: "2rem 1rem",
                      borderRadius: "5px",
                      fontSize: "xl",
                      fontWeight: "bold",
                      width: "100%",
                      boxShadow: `0px 0px 10px ${typeColor(i.type)}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        columnGap: "1rem",
                        alignItems: "center",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-100%",
                          left: "-3%",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: ".2rem",
                            background: typeColor(i.type),
                            padding: "0.2rem 1rem",
                            fontSize: ".8rem",
                            color: colors.bgOne,
                          }}
                        >
                          {i.type}
                        </div>
                      </div>
                      <div className="row col-8">
                        {i.tokenId.map((j, l) => (
                          <div
                            key={l}
                            style={{
                              width: "100%",
                              margin: "0 .2rem",
                              backgroundImage: `radial-gradient(circle, #ffb200, #fea200, #fd9100, #fb8100, #f86f03)`,
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
                      </div>
                      <div className="row col-3">
                        <h4 style={{ color: typeColor(i.type) }}>
                          {i.price.toFixed(2)}BNB
                        </h4>
                      </div>
                      <div
                        className="row col-1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          columnGap: "1rem",
                        }}
                      >
                        <BiTrash
                          onClick={() => deleteTickets(k)}
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
                  <div>
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
                      }}
                      className="cmn-btn"
                    >
                      Mint Tickets
                    </button>
                    <div className="my-2 tag">
                      Total Price {totalPrice().toFixed(2)}BNB
                    </div>
                  </div>
                ) : null}
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
