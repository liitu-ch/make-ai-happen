/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  assetPrefix: '/', // Ensures assets are served from correct path
  trailingSlash: true, // Adds trailing slash to URLs
}

module.exports = nextConfig