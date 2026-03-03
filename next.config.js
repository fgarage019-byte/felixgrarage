/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
