const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '..', '..'))

module.exports = {
  root: rootPath,
  staticPath: path.join(rootPath, 'client'),
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  httpsPort: process.env.HTTPS_PORT || 443,
  letsEncrypt: {
    server: process.env.LETS_ENCRYPT_SERVER || 'staging',
    webrootPath: process.env.LETS_ENCRYPT_CERT_PATH || '/tmp/acme-challenges',
    email: process.env.LETS_ENCRYPT_EMAIL
  },
  redirects: {
    'iss': 'http://www.thequestinstitute.com/ISS/',
    'webjet': 'https://channel9.msdn.com/Events/Build/2017/T6979',
    'slotcar': 'https://www.youtube.com/watch?v=PDZbvw0xE-k',
    'real': 'https://github.com/ou-real',
    'igert': '',
    'parallel': '',
    'resume': ''
  }
}
