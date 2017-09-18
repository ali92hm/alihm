const express = require('express')
const router = express.Router()

module.exports = (app) => {
  app.use('/api/echo', router)
}

router.all('/', async (req, res, next) => {
  let result = {
    message: `Recieved ${req.method}`,
    queryString: req.query,
    body: req.body
  }

  res.send(result)
})
