const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.com'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
