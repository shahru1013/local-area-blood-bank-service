/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Auth',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
