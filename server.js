const express = require('express')
const http = require('http')
const url = require('url')
let app = express()
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'})
//   // response.end('hello world\n')
//   response.write(request)
//   // response.end(url.parse(request.url))
//   response.end()

// }).listen(8888)

app.get('/', (request, response) => {
  // response.send('hello')
  response.send(request)
})
let server = app.listen(8888, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(host, port)
})
console.log('http://127.0.0.1:8888/')