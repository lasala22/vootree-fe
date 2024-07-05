/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
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

  export default withNextIntl(nextConfig);
