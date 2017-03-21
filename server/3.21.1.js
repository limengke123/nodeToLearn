/**
 * Created by 75214 on 2017/3/21.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
const port = 4000;
var mainPath = path.resolve(__dirname,'..');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }
    fs.readFile(mainPath +path, function (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 -Internal Error');
            console.log(err);
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    });
}
http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.jpg':
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
            break;
        default:
            serveStaticFile(res, '/public/notFound.html', 'text/html',404)
            break;
    }
}).listen(port);
console.log('server started on '+port);