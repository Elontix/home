import { useEffect } from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

const chains = [bsc, bscTestnet];
const projectId = process.env.PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../styles/main.sass";

import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <div>
        <Head>
          <title>Rifa - Online Lotto & Lottery Reactjs + Nextjs Template</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pa64pxgeProps} />
      </div>
    );
  }
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <Head>
          <title>Rifa - Online Lotto & Lottery Reactjs + Nextjs Template</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}

export default MyApp;
