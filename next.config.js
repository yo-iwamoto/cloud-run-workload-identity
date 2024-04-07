/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
    turbo: {},
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
