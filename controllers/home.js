let sidebar = require('../helpers/sidebar.js')
let ImageModel = require('../models').Image

module.exports = {
  index: function (req, res) {
    let viewModel = {
      images: []
    }
    ImageModel.find({}, {}, {sort: {timestamp: -1}}, function (err, images) {
      if (err) {throw err}
      viewModel.images = images
      sidebar(viewModel, function(viewModel) {
        res.render('index', viewModel)
      })
    })
  },
  welcome: function (req, res) {
    res.render('news/welcome')
  }
  // first (req, res) {
  //   res.render('first')
  // }
}
