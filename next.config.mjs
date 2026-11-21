/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
