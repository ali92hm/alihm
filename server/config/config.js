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
    'build': 'https://channel9.msdn.com/Events/Build/2017/T6979',
    'webjet': 'https://www.coindesk.com/webjet-ethereum-pilot-aims-at-hotel-industrys-dirty-little-secret/',
    'slotcar': 'https://www.youtube.com/watch?v=PDZbvw0xE-k',
    'real': 'https://github.com/ou-real',
    'igert': 'https://drive.google.com/file/d/0B2FK75IKKYIWcFl3a0tPOGlLOWc/view',
    'parallel': 'https://parallel.illinois.edu/sites/default/files/pujare__hajimirza_poster_2013.pdf',
    'resume': 'https://drive.google.com/file/d/0B2FK75IKKYIWWnB0MFBhZzQ0ZDA/view'
  }
}
