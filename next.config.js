/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'i.pinimg.com',
      'pbs.twimg.com',
      'nacionanime.com'
    ]
  }
}

module.exports = nextConfig
