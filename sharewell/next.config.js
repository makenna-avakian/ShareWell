module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/green',
          permanent: true,
        },
      ];
    },
  };
