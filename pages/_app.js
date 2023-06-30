import { useEffect, useState } from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

import { HydrationProvider, Client } from "react-hydration-provider";

import { Web3Modal } from "@web3modal/react";
import { bsc, bscTestnet } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

import client from "../apollo-client";
import { ApolloProvider } from "@apollo/client";

import Head from "next/head";
import Layout from "../components/layout";

import { Modal } from "react-responsive-modal";
import { CirclesWithBar } from "react-loader-spinner";
import { colors } from "../theme/color";

import "react-responsive-modal/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../public/styles/main.sass";
import "../public/styles/global.css";
import Link from "next/link";

const Toasts = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      background: colors.bgOne,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CirclesWithBar
      height="200"
      width="200"
      color={colors.baseColor}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  </div>
);

const chains = [bsc, bscTestnet];
const projectId = "f5dcf20eb66353538219a935685ad5fd";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setTimeout(() => setLoading(true), 2000);
  }, []);

  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  if (Component.getLayout) {
    return Component.getLayout(
      <div>
        <Head>
          <title>Elontix.io</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    );
  }
  return (
    <div>
      {loading ? (
        <HydrationProvider>
          <Client>
            <ApolloProvider client={client}>
              <WagmiConfig config={wagmiConfig}>
                <Head>
                  <title>Elontix.io</title>
                </Head>
                <Layout>
                  <Component {...pageProps} />
                </Layout>

                <Modal
                  styles={{
                    modal: {
                      top: "20%",
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
                      padding: "4rem 2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        columnGap: "2rem",
                        flexDirection: "column",
                        rowGap: "2rem",
                      }}
                    >
                      <h3 style={{ textAlign: "center" }}>
                        Mint an NFT now to avail a{" "}
                        <span>
                          <h3 className="tag">25% Discount in the presale!</h3>
                        </span>
                        Limited time offer until Presale ends
                      </h3>
                      <Link
                        className="cmn-btn_1"
                        href="/mint"
                        target={"_blank"}
                      >
                        Mint Now
                      </Link>
                      <h3 style={{ textAlign: "center" }}>
                        Increase your chances by{" "}
                        <span>
                          <h3 className="tag">60% to win 10 BNB</h3>
                        </span>{" "}
                        in this weekly draw by contributing 0.1 ETH in our
                        presale, top 100 will be eligible
                      </h3>
                      <Link
                        href="https://www.pinksale.finance/launchpad/0x97BC243267747508ceb608f0Fc1444d1745FFc5F?chain=ETH"
                        target={"_blank"}
                        className="cmn-btn_1"
                      >
                        Pinksale Live
                      </Link>
                    </div>
                  </div>
                </Modal>
              </WagmiConfig>
            </ApolloProvider>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </Client>
        </HydrationProvider>
      ) : (
        <Toasts />
      )}
    </div>
  );
}

export default MyApp;
