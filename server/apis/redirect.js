const express = require('express')
const router = express.Router()
const redirects = require('../config/config').redirects

module.exports = (app) => {
  app.use('/r', router)
}

router.get('/:name', (req, res, next) => {
  if (redirects[req.params.name]) {
    return res.redirect(301, redirects[req.params.name])
  }

  res.sendStatus(404)
})
