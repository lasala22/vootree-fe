/** @type {import('next').NextConfig} */
const nextConfig = { 
    async rewrites() {
    return [
      {
        source: '/partner/:path*',
        destination: '/partner/:path*',
      },
    ];
  },};

export default nextConfig;
