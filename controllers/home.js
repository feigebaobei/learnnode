// module.exports = {
//   index: (req, res) => {
//     res.send('the home: index controller')
//   },
//   second: (req, res) => {
//     res.send('the home: second controller')
//   }
// }

module.exports = {
  index: (req, res) => {
    res.send('index')
  },
  second: (req, res) => {
    res.send('second')
  },
  three: (req, res) => {
    res.send('three')
  },
  four: (req, res) => {
    res.send('four')
  }
}