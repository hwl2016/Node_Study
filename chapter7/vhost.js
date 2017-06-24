var connect = require('connect');
var vhost = require('vhost');

var server = connect();

var app_a = require('./sites/aaa.js');
var app_b = require('./sites/bbb.js');

server.use(vhost('aaa.com', app_a));
server.use(vhost('bbb.com', app_b));

server.listen(3000);