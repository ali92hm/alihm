const express = require('express')
const glob = require('glob')
const logger = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')

module.exports = (app, config) => {
  app.locals.ENV = config.env
  app.locals.ENV_DEVELOPMENT = config.isProduction

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(compress())

  let apis = glob.sync(config.root + '/server/apis/*.js')
  apis.forEach((api) => {
    require(api)(app)
  })

  app.use(express.static(config.staticPath))

  app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  if (!config.isProduction) {
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.json({
        message: err.message,
        error: err
      })
    })
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  })

  return app
}
