// @ts-check

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require("./next-utils.config.js");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
    },
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    typescript: {
        tsconfigPath,
    },
};

module.exports = nextConfig;
