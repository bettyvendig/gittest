var http = require('http');
var server = http.createServer(function(req,res) {
console.log('req' + req.url);
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('hey');
});

server.listen(3000,'127.0.0.1');
console.log('listening to 3000');
