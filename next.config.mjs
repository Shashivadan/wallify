import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
  minimumCacheTTL: 60 * 60 * 24 * 7, // Cache for 7 days
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
};

export default withMDX(config);
