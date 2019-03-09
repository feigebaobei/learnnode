var express = require('express')
var config = require('./server/configure.js')
var app = express()
app.set('port', process.env.PORT || 3800)
app.set('views', __dirname + '/views')
app = config(app)
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
app.listen(app.get('port'), function () {
  console.log(`server up: http://localhost:${app.get('port')}`)
})