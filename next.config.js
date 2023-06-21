/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nftstorage.link"],
  },
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
