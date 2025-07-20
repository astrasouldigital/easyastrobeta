// next.config.js
module.exports = {
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
