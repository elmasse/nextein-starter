const { withNextein } = require('nextein/config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
  withNextein({
    nextein: {
      plugins: [
        ['nextein-plugin-source-fs', { path: 'posts', data: { page: false } }]
      ]
    },
    // your next.js config goes here
    webpack5: true
  })
)
