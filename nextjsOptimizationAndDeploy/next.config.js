const environment = require('./config/loadEnv')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
}

const env = {
  NEXT_PUBLIC_SPACE_ID: environment.next_public_space_id,
  NEXT_PUBLIC_ACCESS_TOKEN: environment.next_public_access_token,
}

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer(config),
  env,
}
