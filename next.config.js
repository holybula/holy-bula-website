/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/locations/fort-lauderdale',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/images/menu/fort-lauderdale-menu.PNG',
        destination: '/menu/print',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
