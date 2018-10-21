let http = require('http'),
  option = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
  }
let callBack = function (response) {
  let body = ''
  response.on('data', function (data) {
    body += data
  })
  response.on('end', function () {
    console.log(body)
  })
}
let request = http.request(option, callBack)
request.end()