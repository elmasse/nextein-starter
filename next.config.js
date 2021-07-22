const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {
    plugins: [
      ['nextein-plugin-source-fs', { path: 'posts', data: { page: false } }]
    ]
  },
  // your next.js config goes here
  webpack5: true
})
