import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const mdxConfig = withMDX({
  extension: /\.mdx$/,
  options: {},
});

const nextConfig: NextConfig = {
  /* Next leaves next-mdx-remote out of the server bundle by default, so in
     development it renders with the project's React instead of the copy
     bundled inside Next, and the two disagree. Bundling it keeps one React. */
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "cdn.contentful.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = mdxConfig(nextConfig);
