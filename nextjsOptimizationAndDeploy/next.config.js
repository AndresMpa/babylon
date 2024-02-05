const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
}

const env = {
  NEXT_PUBLIC_SPACE_ID: '',
  NEXT_PUBLIC_ACCESS_TOKEN: '',
}

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer(config),
  env,
}
