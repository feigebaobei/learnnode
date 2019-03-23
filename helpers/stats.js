// module.exports = function () {
//   return {
//     images: 0,
//     comments: 0,
//     views: 0,
//     likes: 0
//   }
// }

let models = require('../models'),
  async = require('async')
module.exports = function (callback) {
  async.parallel([
      (next) => {
        next(null, 0)
      },
      (next) => {
        next(null, 0)
      },
      (next) => {
        next(null, 0)
      },
      (next) => {
        next(null, 0)
      }
    ], (err, results) => {
    callback(null, {
      images: results[0],
      comments: results[1],
      views: results[2],
      likes: results[3]
    })
  })
}