fs = require('fs');
/*
for (var i=2 ; i < 6 ; i++) {
fs.unlink(`write${i}.txt`, function() {
    console.log('needed function');

});
};
*/
/*
fs.mkdirSync('stuff');


fs.rmdirSync('stuff');

fs.mkdir('stuff',function(){

    console.log('made dir');

});
*/
fs.rmdir('stuff',function(){

    console.log('made dir');

});