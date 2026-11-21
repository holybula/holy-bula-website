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
    ]
  },
}

module.exports = nextConfig
