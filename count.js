
/*module.exports.counter = function(arr) {
    return 'there are '+arr.length+'elements';
}
module.exports.adder = function(a,b) {
    return `your answer is ${a+b}`;

}
module.exports.pi = 3.14;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/
var counter = function(arr) {
    return 'there are '+arr.length+'elements';
}
var adder = function(a,b) {
    return `your answer is ${a+b}`;

}
var pi = 3.14;

module.exports = {
    counter:counter,
    adder: adder,
    pi: pi,


}
