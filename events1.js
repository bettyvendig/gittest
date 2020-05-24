var events = require('events');
var util = require('util');


var Person = function(name) {
this.name = name;
};

util.inherits(Person,events.EventEmitter);

james = new Person('james');
betty = new Person('betty');

var people = [james,betty];

people.forEach(function(person) {
    person.on('speak',function(msg) {
       /* msg = "that's my name"; */
        console.log(person.name + 'said' + msg);
    })
});

james.emit('speak','this is james message');
betty.emit('speak','this is bettys message');