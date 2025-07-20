const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'ik.imagekit.io', port: '', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/soulmatesketch',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
