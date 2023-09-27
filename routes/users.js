var express = require('express')
var router = express.Router()

const coolRouter = require('./cool')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/test', function (req, res) {
  res.send('test')
})

router.use('/cool', coolRouter)

// router.get('/cool', function (req, res) {
//   res.send('你好酷')
// })

module.exports = router
