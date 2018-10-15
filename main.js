var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function conneted() {
  console.log('link success');
  eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler)
eventEmitter.on('data_received', function () {
  console.log('data success');
})
eventEmitter.emit('connection')
console.log('end');
