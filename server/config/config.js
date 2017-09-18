const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '..', '..'))

module.exports = {
  root: rootPath,
  staticPath: path.join(rootPath, 'client'),
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  httpsPort: process.env.HTTPS_PORT || 443
}
