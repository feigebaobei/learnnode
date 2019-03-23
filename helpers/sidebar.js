let Stats = require('./stats'),
  Images = require('./images'),
  Comments = require('./comments'),
  async = require('async')

module.exports = function (viewModel, callback) {
  // viewModel.sidebar = {
  //   stats: Stats(),
  //   popular: Images.popular(),
  //   comments: Comments.newest()
  // }
  // callback(viewModel)
  async.parallel([
      (next) => {
        // return Stats()
        // let a = Stats()
        // // console.log(a)
        // return a
        // next(null, Stats())
        Stats(next)
      },
      (next) => {
        // return Images.popular()
        // let a = Images.popular()
        // // console.log(a)
        // return a
        // next(null, Images.popular())
        Images.popular(next)
      },
      (next) => {
        // return Comments.newest(next)
        // let a = Comments.newest(next)
        // let a = Comments.newest()
        // console.log(Comments)
        // // console.log(a)
        // return a
        // next(null, Comments.newest())
        Comments.newest(next)
      },
    ], function (err, results) {
      // console.log('results', results)
      viewModel.sidebar = {
        stats: results[0],
        popular: results[1],
        comments: results[2]
      }
      callback(viewModel)
    })
}