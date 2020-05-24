var http = require('http');
var fs = require('fs');
var server = http.createServer (function(req,res) {
    console.log('request was made' + req.url);
    if (req.url === "/home") {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('home' );
    } else if (req.url==="/contact") {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('contact' ); 
    

    } else {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('else' ); 

    }
});
server.listen (3000,'127.0.0.1');
console.log('im listening');