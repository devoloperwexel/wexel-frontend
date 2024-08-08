/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_DOMAIN,
        port: "3000",
      },
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
