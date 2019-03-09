let fs = require('fs'),
  path = require('path'),
  sidebar = require('../helpers/sidebar.js')

module.exports = {
  index: (req, res) => {
    // res.send(`the image: index controller ${req.params.image_id}`)
    // res.render('image')
    let viewModel = {
      image: {
        uniqueId: 1,
        title: 'Sample Image 1',
        description: 'This is a sample',
        filename: 'sample1.jpg',
        views: 0,
        likes: 0,
        timestamp:  Date.now()
      },
      comments: [
        {
          image_id: 1,
          email: 'test@testing.com',
          name: 'Test Tester',
          gravatar: 'http://lorempixel.com/75/75/animals/1',
          comment: 'This is a test comment...',
          timestamp: Date.now()
        },
        {
          image_id: 2,
          email: 'test@testing.com',
          name: 'Test Tester',
          gravatar: 'http://lorempixel.com/75/75/animals/2',
          comment: 'This is a test comment...',
          timestamp: Date.now()
        },
      ]
    }
    // let viewModel = {}
    // res.render('image', viewModel)
    sidebar(viewModel, function (viewModel) {
      res.render('image', viewModel)
    })
  },
  create: (req, res) => {
    // res.send('the image: create POST controller')
    // console.log(res.file)
    let saveImage = function () {
      let possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
        imgUrl = ''
      for (let i = 0; i < 6; i++) {
        imgUrl += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      let tempPath = req.files[0].path,
        ext = path.extname(req.files[0].originalname).toLowerCase(),
        targetPath = path.resolve('./public/upload/' + imgUrl + ext)
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        fs.rename(tempPath, targetPath, function (err) {
          if (err) throw err
          res.redirect('/images/' + imgUrl)
        })
      } else {
        fs.unlink(tempPath, () => {
          if (err) throw err;
          res.json(500, {error: 'Only image files are allowed.'})
        })
      }
    }
    saveImage()
  },
  like: function (req, res) {
    // res.send('the image: like POST controller')
    res.json({likes: 1})
  },
  comment: function (req, res) {
    res.send('the image: comment POST controller')
  }
}