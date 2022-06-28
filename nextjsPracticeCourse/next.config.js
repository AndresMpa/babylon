module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/build',
  compress: true,
  async redirects() {
    return [
      {
        source: '/me',
        destination: 'https://github.com/AndresMpa',
        permanent: true,
      }
    ]
  }
}
