/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  output: 'standalone',  // Wichtig für Vercel
  reactStrictMode: true,
  trailingSlash: false, // Keine überflüssigen Slashes
};
export default nextConfig;