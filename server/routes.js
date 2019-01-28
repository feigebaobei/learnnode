let express = require('express'),
  router = express.Router(),
  home = require('../controllers/home')
  image = require('../controllers/image')
module.exports = function (app) {
  router.get('', home.index)
  router.get('/index/second', home.second)
  router.get('/index/three', home.three)
  router.get('/index/four', home.four)
  router.get('/images/:image_id', image.index)
  // router.get('/images/three', image.three)
  router.post('/images', image.create)
  router.post('/images/:image_id/like', image.like)
  router.post('/images/:image_id/comment', image.comment)
  app.use(router)
}