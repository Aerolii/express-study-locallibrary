const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('你好酷' + req.path)
})

module.exports = router
