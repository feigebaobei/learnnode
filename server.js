let express = require('express')
let config = require('./server/configure.js')
let app = express()
app.set('port', process.env.PORT || 3800)
app.set('views', __dirname + '/views')
app = config(app)
// app.get('', function (request, response) {
//   response.send('helll world from server.js')
// })
var server = app.listen(app.get('port'), () => {
  console.log(`serser up: http://localhost:${app.get('port')}`)
})