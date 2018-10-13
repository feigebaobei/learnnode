let http = require('http'),
  url = require('url')
function start() {
  http.createServer(function (request, response) {
    let pathname = url.parse(request.url).pathname
    console.log(pathname, 'pathname')
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('hello world')
    response.end()
  }).listen(8888)
}
exports.start = start