const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*"],
  })
);

const nextConfig = {
  reactStrictMode: true,
  path: "https://cikajogja-site.vercel.app/",
  images: {
    domains: ["cdn.cosmicjs.com"],
  },
};

module.exports = nextConfig;
