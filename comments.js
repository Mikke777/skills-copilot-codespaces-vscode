// Create web server
// Create a web server that listens on port 3000 and serves the file comments.html. You can use the code from the Create a web server exercise.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./comments.html', function(err, data) {
    res.write(data);
    res.end();
  });
}).listen(3000);