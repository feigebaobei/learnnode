let models = require('../models'),
  async = require('async')

module.exports = {
  popular: function (callback) {
    // return [
    //   {
    //     uniqueId: 1,
    //     title: 'Sample Image 1',
    //     description: '',
    //     filename: 'sample1.jpg',
    //     views: 0,
    //     likes: 0,
    //     timestamp: Date.now()
    //   },
    //   {
    //     uniqueId: 2,
    //     title: 'Sample Image 2',
    //     description: '',
    //     filename: 'sample2.jpg',
    //     views: 0,
    //     likes: 0,
    //     timestamp: Date.now()
    //   },
    //   {
    //     uniqueId: 3,
    //     title: 'Sample Image 3',
    //     description: '',
    //     filename: 'sample3.jpg',
    //     views: 0,
    //     likes: 0,
    //     timestamp: Date.now()
    //   },
    //   {
    //     uniqueId: 4,
    //     title: 'Sample Image 4',
    //     description: '',
    //     filename: 'sample4.jpg',
    //     views: 0,
    //     likes: 0,
    //     timestamp: Date.now()
    //   },
    // ]

    models.Image.find({}, {}, {limit: 9, sort: {likes: -1}}, (err, images) => {
      if (err) throw err
      callback(null, images)
    })
  }
}