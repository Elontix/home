import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useBalance } from "wagmi";

import Mintbar from "../components/common/MintBar";
import { colors } from "../theme/color";

const AI = () => {
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  const connectWallet = () => {
    open();
    setDefaultChain(bsc);
  };
  useEffect(() => {
    disconnect();
  }, []);

  function addressStrip(str) {
    return (
      str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length)
    );
  }

  const [number, setNumber] = useState("0");
  const [prob, setProb] = useState("0");

  function generateRandom(min = 0, max = 5000) {
    const t = localStorage.getItem("store");
    if (t === null) {
      localStorage.setItem("store", 1);
    } else {
      localStorage.setItem("store", t + 1);
    }
    if (t <= 3) {
      let difference = max - min;
      let rand = Math.random();
      rand = Math.floor(rand * difference);
      rand = String(rand + min);
      setNumber(rand);

      let diff = 100 - 80;
      let newRand = Math.random();
      newRand = Math.floor(newRand * diff);
      newRand = String(newRand + 80);
      setProb(newRand);
    } else {
      alert("Oops! AI is busy, please try again sometime...");
    }
  }

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <Mintbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "2rem",
            alignItems: "center",
          }}
        >
          {isConnected ? (
            <div style={{ color: colors.baseColor }}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem 2rem",
                  boxShadow: `0px 0px 4px ${colors.baseColor}`,
                  columnGap: "2rem",
                  minWidth: "326px",
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="row mb-none-30 mt-50"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem 2rem",
                      columnGap: "2rem",
                      rowGap: "2rem",
                      maxWidth: "726px",
                      borderRadius: "1rem",
                    }}
                  >
                    <h6>Confused about what bin number to choose?</h6>
                    <button
                      onClick={() => generateRandom(0, 5000)}
                      className="cmn-btn"
                    >
                      Ask out AI BOT
                    </button>
                    {number !== "0" ? (
                      <h3
                        style={{
                          padding: "0.4rem 1rem",
                          boxShadow: `0px 0px 4px ${colors.baseColor}`,
                          backgroundImage: `linear-gradient(to right top,#5a4bcc,#4538a2,#31277a,#1d1655,#0f0232)`,
                          borderRadius: "1rem",
                        }}
                      >
                        choose bin number{"\u00A0"}
                        <span>
                          <h3
                            style={{
                              color: colors.baseColor,
                              fontWeight: "bold",
                            }}
                          >
                            {number}
                          </h3>
                        </span>
                        {"\u00A0"}
                        for
                        {"\u00A0"}
                        <span>
                          <h3
                            style={{
                              color: colors.baseColor,
                              fontWeight: "bold",
                            }}
                          >
                            {prob}%
                          </h3>
                        </span>
                        {"\u00A0"}
                        chances of winning
                      </h3>
                    ) : null}
                  </div>
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

export default AI;
