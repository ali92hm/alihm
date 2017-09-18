const express = require('express')
const config = require('./config/config')

const app = express()

require('./config/express')(app, config)

if (config.isProduction) {
  const ssl = require('./config/ssl')(config)
  // handles acme-challenge and redirects to https
  require('http').createServer(ssl.middleware(require('redirect-https')())).listen(config.port, () => {
    console.log('Listening for ACME http-01 challenges on', config.port)
  })

  app.use(wwwRedirect())

  // handles app
  require('https').createServer(ssl.httpsOptions, ssl.middleware(app)).listen(config.httpsPort, () => {
    console.log('app listening on port', config.httpsPort)
  })
} else {
  app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port)
  })
}

module.exports = app

function wwwRedirect () {
  return (req, res, next) => {
    if (req.headers.host.match(/^www/) != null) {
      return next()
    }

    let protocol = req.headers['x-forwarded-proto'] || req.protocol
    res.redirect(301, `${protocol}://www.${req.headers.host}${req.url}`)
  }
}
