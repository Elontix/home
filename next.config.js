/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nftstorage.link"],
  },
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    IS_CONTRACT_MAINNET: process.env.IS_CONTRACT_MAINNET,
  },
};

module.exports = nextConfig;
