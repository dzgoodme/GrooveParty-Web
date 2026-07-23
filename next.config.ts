import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/GrooveParty-Official-Web-Final" : "",
};

export default nextConfig;
