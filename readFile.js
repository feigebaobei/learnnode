var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');

readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
  data += chunk
})
readerStream.on('end', function () {
  writeStream.write(data, 'UTF8')
  console.log(data);
})
readerStream.on('error', function (err) {
  console.log(err.stack);
})
console.log('end');
