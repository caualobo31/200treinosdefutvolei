import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 768, 1024, 1280, 1440],
    imageSizes: [160, 240, 320, 480],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
