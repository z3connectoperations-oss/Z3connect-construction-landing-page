import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint runs as a separate step; don't fail the production build on lint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
