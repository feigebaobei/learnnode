let models = require('../models'),
  async = require('async')
module.exports = {
  newest: function (callback) {
    // return [
    //   {
    //     image_id: 1,
    //     email: 'test@testing.com',
    //     name: 'Test Tester',
    //     gravatar: 'http://lorempixel.com/75/75/animals/1',
    //     comment: 'This is a test comment...',
    //     timestamp: Date.now(),
    //     image: {
    //       uniqueId: 1,
    //       title: 'Sample Image 1',
    //       description: '',
    //       filename: 'sample1.jpg',
    //       views: 0,
    //       likes: 0,
    //       timestamp: Date.now()
    //     }
    //   },
    //   {
    //     image_id: 2,
    //     email: 'test@testing.com',
    //     name: 'Test Tester',
    //     gravatar: 'http://lorempixel.com/75/75/animals/2',
    //     comment: 'This is a test comment...',
    //     timestamp: Date.now(),
    //     image: {
    //       uniqueId: 1,
    //       title: 'Sample Image 1',
    //       description: '',
    //       filename: 'sample1.jpg',
    //       views: 0,
    //       likes: 0,
    //       timestamp: Date.now()
    //     }
    //   }
    // ]
    // models.Comment.find({}, {limit: 5, sort: {'timestamp': -1}}, (err, comments) => {
    // models.Comment.find({}, (err, comments) => {
    // models.Comment.find({}, {limit: 2}, (err, comments) => {
    //   if (err) throw err
    //   console.log('comments', comments)
    //   async.each(comments, (comment, next) => {
    //     models.Image.findOne({ image_id: comment.image_id}, (err, image) => {
    //       if (err) throw err
    //       console.log('image', image)
    //       comment.image = image
    //       next(err)
    //     })
    //   }, (err) => {
    //     if (err) throw err
    //     // callback(err, comments)
    //     return comments
    //   })
    //   // return comments
    // })
    models.Comment.find({}, {}, {limit: 5, sort: {timestamp: -1}}, function (err, comments) {
      if (err) throw err
      // console.log('comments', comments)
      async.each(comments, (comment, next) => {
        models.Image.findOne({image_id: comment.image_id}, (err, image) => {
          if (err) throw err
          // console.log('image', image)
          comment.image = image
          next(err)
        })
      }, (err) => {
        if (err) throw err
        // console.log('comments', comments)
        // return comments
        callback(err, comments)
      })
    })
  }
}