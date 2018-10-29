let {hello: hl} = require('./custModule/hello.js')

console.log('start');
hl()
console.log('end');