let fs = require('fs'),
  path = require('path'),
  sidebar = require('../helpers/sidebar.js'),
  Models = require('../models'),
  md5 = require('MD5')

module.exports = {
  index: (req, res) => {
    // res.send(`the image: index controller ${req.params.image_id}`)
    // res.render('image')
    let viewModel = {
    }
    // let viewModel = {}
    // res.render('image', viewModel)
    // sidebar(viewModel, function (viewModel) {
    //   res.render('image', viewModel)
    // })
    Models.Image.findOne({
      filename: { $regex: req.params.image_id}
    }, function (err, image) {
      if (err) {throw err}
      if (image) {
        image.views++
        viewModel.image = image
        image.save()
        Models.Comment.find({image_id: image.image_id}, {}, {
        // Models.Comment.find({image_id: image.image_id}, {}, {
          sort: {
            timestamp: -1
          }
        }, function (err, comments) {
          viewModel.comments = comments
          sidebar(viewModel, (viewModel) => {
            res.render('image', viewModel)
          })
        })
      } else {
        res.redirect('/')
      }
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
      Models.Image.find({filename: imgUrl}, function (err, images) {
        if (images.length > 0) {
          saveImage()
        } else {
          let tempPath = req.files[0].path,
            ext = path.extname(req.files[0].originalname).toLowerCase(),
            targetPath = path.resolve('./public/upload/' + imgUrl + ext)
          if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
            fs.rename(tempPath, targetPath, function (err) {
              if (err) {throw err}
              var newImg = new Models.Image({
                title: req.body.title,
                filename: imgUrl + ext,
                image_id: imgUrl,
                description: req.body.description
              })
              newImg.save(function(err, image) {
                res.redirect('/images/' + image.uniqueId)
              })
            })
          } else {
            fs.unlink(tempPath, () => {
              if (err) { throw err }
              res.json(500, {error: 'Only image files are allowed.'})
            })
          }
        }
      })
    }
    saveImage()
  },
  like: function (req, res) {
    // res.send('the image: like POST controller')
    // res.json({likes: 1})
    Models.Image.findOne({filename: {$regex: req.params.image_id}}, function (err, image) {
      if (!err && image) {
        image.likes++
        image.save(function (err) {
          if (err) {
            res.json(err)
          } else {
            res.json({likes: image.likes})
          }
        })
      }
    })
  },
  comment: function (req, res) {
    // res.send('the image: comment POST controller')
    Models.Image.findOne({filename: {$regex: req.params.image_id}}, function(err, image) {
      if (!err && image) {
        let newComment = new Models.Comment(req.body)
        newComment.gravatar = md5(newComment.email)
        newComment.image_id = req.params.image_id
        newComment.save(function(err, comment) {
          if (err) {throw err}
          res.redirect(`/images/${image.uniqueId}#${comment._id}`)
        })
      } else {
        res.redirect('/')
      }
    })
  },
  remove: (req, res) => {
    Models.Image.findOne({filename: {$regex: req.params.image_id}}, {}, {}, (err, image) => {
      if (err) { throw err }
      // console.log(image)
      fs.unlink(path.resolve(`./public/upload/${image.filename}`), (err) => {
        if (err) { throw err }
        Models.Comment.remove({image_id: image.image_id}, (err) => {
          image.remove((err) => {
            if (!err) {
              res.json(true)
            } else {
              res.json(false)
            }
          })
        })
      })
    })
  }
}