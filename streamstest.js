var fs = require('fs');
var http = require('http');

var mystream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var mywritestream = fs.createWriteStream(__dirname + '/writeme.txt');
mystream.on('data',function(chunk){
    console.log('new chunk');
   /* console.log("new " + chunk); */
    mywritestream.write(chunk);


})
