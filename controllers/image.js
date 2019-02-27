module.exports = {
  index: (req, res) => {
    res.send(`the image: index controller ${req.params.image_id}`)
  },
  create: (req, res) => {
    res.send('the image: create POST controller')
  },
  like: function (req, res) {
    res.send('the image: like POST controller')
  },
  comment: function (req, res) {
    res.send('the image: comment POST controller')
  }
}