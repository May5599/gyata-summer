import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gyatanutrition.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
