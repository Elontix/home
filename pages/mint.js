import mint from "../data/mint";
import Image from "next/image";
import TicketGif from "/public/images/crypto/tickets.gif";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useConnect, useBalance, useDisconnect } from "wagmi";
import { useEffect } from "react";
import { bsc, bscTestnet } from "wagmi/chains";
import { colors } from "../theme/color";
import { MintAPi } from "./api/mint";
import { useMutation } from "@apollo/client";

const Mint = () => {
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  const [createAccount, { data, loading, error, called }] = useMutation(
    MintAPi.createAccountGQL()
  );
  const { disconnect } = useDisconnect();

  const {
    address,
    connector,
    isConnected,
    isConnecting,
    isDisconnected,
    isReconnecting,
    status,
  } = useAccount();

  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  const connectWallet = () => {
    open();
    setDefaultChain(bsc);
  };

  const addressStrip = (str) =>
    str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length);

  useEffect(() => {
    disconnect();
  }, []);

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
  }, [address]);

  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <div className="row" style={{ rowGap: "2rem", alignItems: "center" }}>
          <div className="col-sm-12 col-lg-6">
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
                  <h4>DCB World x BRITTO</h4>
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
                  {[0, 1, 2, 3, 4, 5].map((i, k) => (
                    <div
                      style={{
                        background: "white",
                        maxWidth: "32px",
                        maxHeight: "32px",
                        minHeight: "32px",
                        minWidth: "32px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 .4rem",
                        borderRadius: "5px",
                        fontSize: "xl",
                        fontWeight: "bold",
                      }}
                      className="col"
                      key={k}
                    >
                      <div>{i}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <h4 style={{ cursor: "pointer" }}>GENERATE RANDOM TICKET</h4>
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
                      onClick={() => {
                        console.log("buy tickers");
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
        </div>
      </div>
      <div className="bg-shape"></div>
    </>
  );
};

export default Mint;
