const withOffline = require('next-offline')
const path = require('path')

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['static'] = path.join(__dirname, 'static')
    config.resolve.alias['store'] = path.join(__dirname, 'store')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')

    return config
  },
}

module.exports = withOffline(nextConfig)
