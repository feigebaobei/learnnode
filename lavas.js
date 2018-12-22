let express = require('express')
let app = express()
let fs = require('fs')
let html = fs.readFileSync('index.html');

app.get('', function (request, response) {
  console.log(html)
  response.send(html)
})

let server = app.listen(8081, () => {

})