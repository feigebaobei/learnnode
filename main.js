// let fs = require('fs')
// let data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log('end')

let events = require('events'),
  eventsEmitter = new events.EventEmitter(),
  connectHander = function () {
    console.log('link success')
    eventsEmitter.emit('data_received')
  }
eventsEmitter.on('connection', connectHander)
eventsEmitter.on('data_received', function () {
  console.log('data received')
})

eventsEmitter.emit('connection')
console.log('end')