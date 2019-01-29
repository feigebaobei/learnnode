let express = require('express')
let router = express.Router()
router.get('/', (req, res) => {
  res.send('user page')
})
router.get('/list', (req, res) => {
  res.send('user/list page')
})
router.get('/add', (req, res) => {
  res.send('user/add page')
})
module.exports = router