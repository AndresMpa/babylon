const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
}

const env = {
  NEXT_PUBLIC_SPACE_ID: 'ynggq0z11393',
  NEXT_PUBLIC_ACCESS_TOKEN: 'ONQVn84NsH_2wajFr4Qw7q0afAyZsGx83Ym-EBT8TzA',
}

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer(config),
  env,
}
