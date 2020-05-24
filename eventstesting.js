var events = require('events');


myEmitter = new events.EventEmitter();
myEmitter.on('someevent', function(msg) {


console.log(msg);

});

myEmitter.emit('someevent','this is a message');