let express = require('express')
let router = express.Router()
router.get('/', (req, res) => {
  res.send('about page')
})
router.get('/food', (req, res) => {
  res.send('about/food page')
})
router.get('/clothes', (req, res) => {
  res.send('about/clothes page')
})
module.exports = router