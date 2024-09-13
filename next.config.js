/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ['images.prismic.io', 'dnmirg01ifa6a.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dnmirg01ifa6a.cloudfront.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/jobseeker',
        destination: '/',
        permanent: true,
      },
      {
        source: '/employer',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/recruiter',
        destination: '/recruiters',
        permanent: true,
      }
    ];
  },
  experimental: {
    serverMinification: false,
  },
};

module.exports = nextConfig;
