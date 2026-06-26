/** @type {import('next').NextConfig} */

// The GitHub Pages project repo name. The site is served from
// https://<user>.github.io/abdullah_portfolio/, so assets and routes
// must be prefixed with this base path in production.
const repo = "abdullah_portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
