const express = require('express')
const router = express.Router()

module.exports = (app) => {
  app.use('/api/health', router)
}

router.get('/', async (req, res, next) => {
  res.send(200, {message: 'success'})
})
