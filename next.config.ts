import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['atlas-shared-web'],
  experimental: {
    webpackBuildWorker: false,
  },
};

export default nextConfig;
