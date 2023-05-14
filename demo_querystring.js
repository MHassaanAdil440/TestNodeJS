var http = require('http');
var url = require('url'); // Include the url module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; // Parse the request url
    var txt = q.year + " " + q.month; // Get the year and month from the url
    res.end(txt);
}).listen(8084)