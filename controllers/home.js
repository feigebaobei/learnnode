let sidebar = require('../helpers/sidebar.js')
let ImageModel = require('../models').Image

module.exports = {
  index: function (req, res) {
    // res.send('the home: index controller')
    // res.render('index')
    let viewModel = {
      // images: [
      //   {
      //     uniqueId   : 1,
      //     title      : 'Sample Image 1',
      //     description: '',
      //     filename   : 'sample1.jpg',
      //     views      : 0,
      //     likes      : 0,
      //     timestamp  : Date.now
      //   },
      //   {
      //     uniqueId   : 2,
      //     title      : 'Sample Image 2',
      //     description: '',
      //     filename   : 'sample2.jpg',
      //     views      : 0,
      //     likes      : 0,
      //     timestamp  : Date.now
      //   },
      //   {
      //     uniqueId   : 3,
      //     title      : 'Sample Image 3',
      //     description: '',
      //     filename   : 'sample3.jpg',
      //     views      : 0,
      //     likes      : 0,
      //     timestamp  : Date.now
      //   },
      //   {
      //     uniqueId   : 4,
      //     title      : 'Sample Image 4',
      //     description: '',
      //     filename   : 'sample4.jpg',
      //     views      : 0,
      //     likes      : 0,
      //     timestamp  : Date.now
      //   },
      // ]
      images: []
    }
    // let viewModel = {}
    // res.render('index', viewModel)
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
