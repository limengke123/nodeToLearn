var http = require('http');

http.createServer(function (req, res) {
    //res.writeHead({'Content-type':'text/plain'});
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case'':
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('homepage');
            break;
        case'/about':
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('about');
            break;
        default:
            res.writeHead(200,{'Content-type': 'text/plain'});
            res.end('not Found');
            break;
    }
}).listen(3000);

console.log('server is started on 3000');