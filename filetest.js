fs = require('fs');
fs.readFile('readme.txt','utf8', function(err,data){
    
   fs.writeFile('write5.txt', data, function (err) {
   });
   
});


console.log('after readme');
