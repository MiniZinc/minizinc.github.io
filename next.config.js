/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    copyrightYear: new Date().getFullYear(),
    basePath: process.env.BASE_PATH || '',
  },
}
module.exports = nextConfig
