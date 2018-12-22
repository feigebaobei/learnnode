let http = require('http')
// http.createServer( function (request, response) {
//   response.write('<h1>title</h1>')
//   response.wirteHead(200, {'Content-Type': 'text/html'})
//   response.end('<p>hello</p>')
// }).listen(3000)
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Node.js</h1>');
  res.end('<p>Hello World byy sdsfd </p>');
}).listen(3800);
console.log('success')


