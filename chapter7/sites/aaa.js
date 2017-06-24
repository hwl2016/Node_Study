var http = require('http');

module.exports = http.createServer(function(req, res) {
	res.end('Hello form aaa.com\n');
})