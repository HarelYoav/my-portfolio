import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
        { protocol: 'https', hostname: '**.githubusercontent.com' },
        { protocol: 'https', hostname: '**.github.com' }
    ],
},
};

export default nextConfig;
