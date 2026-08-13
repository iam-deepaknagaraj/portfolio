import type { NextConfig } from "next";

const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Project Pages: https://iam-deepaknagaraj.github.io/portfolio
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
