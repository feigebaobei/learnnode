var express = require('express'),
  router = express.Router(),
  home = require('../controllers/home'),
  image = require('../controllers/image')

module.exports = function(app) {
  router.get('/', home.index)
  // router.get('/first', home.first)
  router.get('/welcome', home.welcome)
  router.get('/images/:image_id', image.index)
  router.delete('/images/:image_id', image.remove)
  router.post('/images', image.create)
  router.post('/images/:image_id/like', image.like)
  router.post('/images/:image_id/comment', image.comment)
  app.use(router)
}