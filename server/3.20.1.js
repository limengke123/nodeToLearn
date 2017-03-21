var http = require('http');
const port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('hello world');
}).listen(port);

console.log('server started on ' + port);