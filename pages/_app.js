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

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../public/styles/main.sass";
import "../public/styles/global.css";

import { CirclesWithBar } from "react-loader-spinner";
import { colors } from "../theme/color";
import { isLocalURL } from "next/dist/shared/lib/router/router";

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
