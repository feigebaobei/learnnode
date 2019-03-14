var express = require('express')
var config = require('./server/configure.js')
var app = express()
var mongoose = require('mongoose')
app.set('port', process.env.PORT || 3800)
app.set('views', __dirname + '/views')
app = config(app)
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
mongoose.connect('mongodb://localhost:27017/imgPloadr', {useNewUrlParser: true})
mongoose.connection.on('open', () => {
  console.log('mongoose connected.')
})
app.listen(app.get('port'), function () {
  console.log(`server up: http://localhost:${app.get('port')}`)})