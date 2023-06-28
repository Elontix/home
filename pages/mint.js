import Image from "next/image";

import TicketGif from "/public/images/ticket.gif";

import Diamond from "/public/images/ticket.gif";
import Gold from "/public/images/ticket.gif";
import Silver from "/public/images/ticket.gif";
import Bronze from "/public/images/ticket.gif";

import { useEffect, useState } from "react";

import { bsc } from "wagmi/chains";
import { colors } from "../theme/color";
import { MintAPi } from "./api/mint/mint";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect, useContractWrite } from "wagmi";

import { BiErrorAlt, BiTrash } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";

import Mintbar from "../components/common/MintBar";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const contractAddress = MintAPi.getAddress(true);
const contractAbi = MintAPi.getMintAbi(true);

const Mint = () => {
  console.log(contractAddress, contractAbi);
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    isError: false,
    icon: <BiErrorAlt color={"green"} size={48} />,
  });

  function closeModal() {
    setIsOpen(false);
  }
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();
  const [isImageSet, setIsImageSet] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [token, setToken] = useState(["0", "0", "0", "0", "0"]);

  function typeColor(type) {
    if (type === "DIAMOND") return "#b9f2ff";
    if (type === "GOLD") return "#FFD700";
    if (type === "SILVER") return "#C0C0C0";
    if (type === "BRONZE") return " #CD7F32";
  }

  function updateRandomNumber() {
    let temp = token;
    const t = [...generateRandom()];
    for (let k = 0; k < temp.length; k++) {
      temp[k] = t[k];
    }
    setToken([...temp]);
    nftIdentifier();
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
    console.log(stripedToken);
    // diamond
    if (stripedToken < 5000) {
      setPrice(0.2);
      setType("DIAMOND");
      setImage(Diamond);
      return;
    }
    // gold
    if (stripedToken > 5000 && stripedToken < 20000) {
      setPrice(0.1);
      setType("GOLD");
      setImage(Gold);
      return;
    }
    // silver
    if (stripedToken > 20000 && stripedToken < 50000) {
      setPrice(0.05);
      setType("SILVER");
      setImage(Silver);
      return;
    }
    // bronze
    if (stripedToken > 50000) {
      setPrice(0.03);
      setType("BRONZE");
      setImage(Bronze);
      return;
    }
    setIsImageSet(true);
  }

  function getTickets() {
    let sampledTickets = [];
    for (let i = 0; i < tickets.length; i++) {
      const s = tickets[i].tokenId;
      let t = "";
      for (let j = 0; j < s.length; j++) {
        t += s[j];
      }
      sampledTickets.push(Number(t));
    }
    return sampledTickets;
  }

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

  function addressStrip(str) {
    return (
      str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length)
    );
  }

  function connectWallet() {
    open();
    setDefaultChain(bsc);
    nftIdentifier();
  }

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
    address: contractAddress,
    abi: contractAbi,
    functionName: "mintMultiple",
    args: [address, getTickets()],
    chainId: bsc.chainId,
    account: address,
    value: BigInt(totalPrice() * 10 ** 18),
  });

  useEffect(() => {
    if (mintStatus === "error" && mintStatus !== "loading") {
      setMessage({
        icon: <BiErrorAlt color={"red"} size={48} />,
        message: `Oops Something went wrong`,
        isError: true,
      });
      setModalIsOpen(true);
    }
    if (mintStatus === "success" && mintStatus !== "loading") {
      setMessage({
        icon: <MdOutlineDoneOutline color="green" size={48} />,
        message: `hash ${mintData.hash}`,
        isError: false,
      });
      setModalIsOpen(true);
    }
  }, [mintStatus]);

  async function mintTickets() {
    setMessage({
      icon: null,
      message: ``,
      isError: false,
    });
    setModalIsOpen(false);
    mintWrite();
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
              <Image
                height={320}
                width={520}
                src={isImageSet ? image : TicketGif}
                alt="ok"
              />

              <div className="row py-4">
                <div className="col-6" style={{ textAlign: "left" }}>
                  <h4>Ticket Type</h4>
                  <h4>Price</h4>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <h5 style={{ color: typeColor(type) }}>{type}</h5>

                  <h5 style={{ color: colors.baseColor }}>
                    {price}{" "}
                    <span>
                      <h5>BNB</h5>
                    </span>
                  </h5>
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
                        color: typeColor(type),
                        alignItems: "center",
                        margin: "1rem .4rem",
                        borderRadius: "5px",
                        fontSize: "xl",
                        fontWeight: "bold",
                        boxShadow: `0px 0px 8px ${typeColor(type)}`,
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
                    GENERATE{" "}
                    <span>
                      <h4 className="tag">RANDOM TICKET</h4>
                    </span>
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
                      ADD TICKET
                    </div>
                  ) : (
                    <button onClick={connectWallet} className="cmn-btn">
                      CONNECT WALLET
                    </button>
                  )}
                </div>

                {isConnected ? (
                  <div style={{ color: colors.baseColor }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <div style={{ color: "white" }}>Connected To</div>
                        <div style={{ fontSize: "1.4rem" }}>
                          {isConnected ? addressStrip(address) : ""}
                        </div>
                      </div>

                      <div>
                        {balanceFeteched ? (
                          <span
                            style={{
                              fontSize: "2rem",
                            }}
                          >
                            {`${balance.formatted}`}{" "}
                            <span
                              style={{
                                color: colors.baseColor,
                                fontSize: "1.2rem",
                              }}
                            >
                              {`${balance.symbol}`}
                            </span>
                          </span>
                        ) : (
                          0
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
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
                  <div>
                    <button onClick={connectWallet} className="cmn-btn my-4">
                      CONNECT WALLET
                    </button>
                    <div className="tag">
                      Connect your wallet to add tickets
                    </div>
                  </div>
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
                              background: typeColor(i.type),
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
                          {i.price.toFixed(2)} <span>BNB</span>
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
                    <button onClick={() => mintTickets()} className="cmn-btn">
                      MINT TICKETS
                    </button>
                    <div className="my-2 tag">
                      <span>Total Price</span> {totalPrice().toFixed(2)}{" "}
                      <span>BNB</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        styles={{
          modal: {
            background: colors.bgOne,
            borderRadius: "2rem",
          },
          closeButton: {
            color: colors.baseColor,
            background: colors.baseColor,
          },
        }}
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <div
          style={{
            background: colors.bgOne,
            padding: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "2rem",
            }}
          >
            <div>{message.icon}</div>
            <div style={{ color: colors.baseColor }}>
              {message.message.substring(0, 620)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}
          >
            <button
              className="cmn-btn"
              onClick={() => {
                setModalIsOpen(false);
                setMessage({
                  icon: null,
                  isError: false,
                  message: "",
                });
              }}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
      <div className="bg-shape"></div>
    </>
  );
};

export default Mint;

function generateRandom(min = 0, max = 100000) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = String(rand + min);
  rand = rand.split("");
  let spliter = 5 - rand.length;
  for (let i = 0; i < spliter; i++) rand = ["0", ...rand];
  return rand;
}
