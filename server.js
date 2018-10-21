let http = require('http'),
  url = require('url'),
  fs = require('fs')

// function start() {
//   http.createServer(function (request, response) {
//     let pathname = url.parse(request.url).pathname
//     console.log(pathname, 'pathname')
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.write('hello world')
//     response.end()
//   }).listen(8888)
// }
// exports.start = start

http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname
  console.log(pathname)
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {} else {
      console.log(err)
      console.log(data)
      response.writeHead(200, {"Content-Type": 'text/html'})
      response.write(data.toString())
    }
    response.end()
  })
}).listen(8080)