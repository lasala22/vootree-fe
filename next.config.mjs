/** @type {import('next').NextConfig} */
const nextConfig = { 
    async rewrites() {
    return [
      {
        source: '/partner/:path*',
        destination: '/partner/:path*',
      },
    ];
  }, images: {
    domains: ['localhost'],
  },};

export default nextConfig;
