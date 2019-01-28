module.exports = {
  index: (req, res) => {
    res.send('the image: index controller ' + req.params.image_id)
  },
  create: (req, res) => {
    res.send('the image:create post controller')
  },
  like: (req, res) => {
    res.send('the image:like post controller')
  },
  comment: (req, res) => {
    res.send('the image:comment post controller')
  }
}




// module.exports = {
//   index: function(req, res) {
//     res.send('The image:index controller ' +
//       req.params.image_id);
//   },
//   second: function(req, res) {
//     res.send('The image:second controller');
//   },
//   create: function(req, res) {
//     res.send('The image:create POST controller');
//   },
//   like: function(req, res) {
//     res.send('The image:like POST controller');
//   },
//   comment: function(req, res) {
//     res.send('The image:comment POST controller');
//   }
// };
