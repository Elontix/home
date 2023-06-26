import mint from "../data/mint";
import Image from "next/image";
import TicketGif from "/public/images/ticket.gif";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect, useContractWrite } from "wagmi";

import { useEffect, useState } from "react";
import { bscTestnet } from "wagmi/chains";
import { colors } from "../theme/color";
import { MintAPi } from "./api/mint/mint";

import toast, { Toaster } from "react-hot-toast";
import { BiErrorAlt } from "react-icons/bi";
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
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  function updateRandomNumber() {
    setToken([...generateRandom()]);
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

  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  const connectWallet = () => {
    open();
    setDefaultChain(bscTestnet);
    nftIdentifier();
  };
  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  useEffect(() => {
    disconnect();
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
    functionName: "mint",
    args: [address, tokenStrip(token)],
    chainId: bscTestnet.chainId,
    account: address,
    value: BigInt(price * 10 ** 18),
  });

  const [counter, setCounter] = useState(0);

  console.log(mintIsSuccess);

  function typeColor(type) {
    if (type === "DIAMOND") return "#b9f2ff";
    if (type === "GOLD") return "#FFD700";
    if (type === "SILVER") return "#C0C0C0";
    if (type === "BRONZE") return " #CD7F32";
  }

  useEffect(() => {
    console.log(counter, mintStatus, mintIsSuccess);
    if (mintIsSuccess && counter < 4) {
      mintWrite();
      setCounter(counter + 1);
    }
  }, [counter, mintIsSuccess]);

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

  const timeFrame = (t) => {
    if (t === 0) return "DAYS";
    if (t === 1) return "HOURS";
    if (t === 2) return "MINUTES";
    if (t === 3) return "SECONDS";
  };

  const data = [1, 2, 2, 2, 2, 2];

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        <div
          className="row"
          style={{ rowGap: "2rem", columnGap: "0rem", alignItems: "center" }}
        >
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
              <Image height={320} width={520} src={TicketGif} alt="ok" />
              <div className="row g-4 py-4">
                {data.map((s, i) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      borderRadius: "1rem",
                    }}
                    key={i}
                    className="col-12 py-4"
                  >
                    {[1, 2, 3, 4].map((k, j) => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          rowGap: ".5rem",
                        }}
                        key={j}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "2rem",
                            background: colors.bgOne,
                            boxShadow: `0px 0px 4px ${colors.baseColor}`,
                            borderRadius: "10px",
                            minWidth: "60px",
                            maxWidth: "60px",
                            maxHeight: "60px",
                            minHeight: "60px",
                            color: colors.baseColor,
                          }}
                          key={j}
                        >
                          {k}
                        </div>

                        <div
                          style={{ fontSize: ".7rem", fontWeight: "bold" }}
                          className="tag"
                        >
                          {timeFrame(j)}{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
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
