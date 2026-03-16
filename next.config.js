/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.zohowebstatic.com',
        pathname: '/sites/zweb/images/productlogos/**',
      },
    ],
  },
}

module.exports = nextConfig
