/**
 * 提供安全的中间件
 */

var connect = require('connect');
var fs = require('fs');
var bodyParser = require('body-parser');
var router = require('./router');

var basicAuth = require('basic-auth');	//基本权限认证
var csurf = require('csurf');	//防止csrf攻击的
var errorHandler = require('errorhandler');	//错误处理

var routes = {
	GET: {
		'/users': function(req, res) {
			var credentials = basicAuth(req);

			if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
				res.statusCode = 401
				res.setHeader('WWW-Authenticate', 'Basic realm="example"')
				res.end('Access denied')

				return
			}

			fs.readFile('./views/form.html', (err, data) => {
				if(err) {
					console.log(err);
					return
				}
				res.end(data.toString());
			})
		},
		'/get/66': function(req, res, id) {
			res.setHeader('Content-Type', 'application/json');
			var data = {
				"code": 200,
				"list": {
					"id": 1,
					"name": "Michael"
				}
			}
			res.end(JSON.stringify(data));
		}
	},
	POST: {
		'/post/66': function(req, res, id) {
			res.end('post user');
		}
	},
	DELETE: {
		'/delete/66': function(req, res, id) {
			res.end('delete user');
		}
	},
	PUT: {
		'/put/66': function(req, res, id) {
			res.end('put user');
		}
	}
}

var app = connect()
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	// .use(router(routes))
	.use('/', function(req, res, next) {
		setTimeout(function() {
			next(new Error('something broke!'));
		}, 500);
	})
	.use(errorHandler());	//捕获异常

app.listen(3000);
