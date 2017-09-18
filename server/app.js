const express = require('express')
const config = require('./config/config')

const app = express()
require('./config/express')(app, config)

if (config.isProduction) {
  const letsEncrypt = require('./config/lets-encrypt')(config)
  // handles acme-challenge and redirects to https
  require('http').createServer(letsEncrypt.middleware(require('redirect-https')())).listen(config.port, () => {
    console.log('Listening for ACME http-01 challenges on', config.port)
  })

  // handles app
  require('https').createServer(letsEncrypt.httpsOptions, letsEncrypt.middleware(app)).listen(config.httpsPort, () => {
    console.log('app listening on port', config.httpsPort)
  })
} else {
  app.listen(config.port, () => {
    console.log('Express server listening on port', config.port)
  })
}

module.exports = app