/**
 * 关于静态文件的中间件
 */

var connect = require('connect');
var fs = require('fs');
var bodyParser = require('body-parser');
var router = require('./router');

var staticFiles = require('serve-static');
var compression = require('compression');
var directory = require('serve-index');

var routes = {
	GET: {
		'/users': function(req, res) {
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
	.use(compression())	//压缩静态文件
	.use('/static', directory(__dirname + '/public', {	//映射目录列表
		icons: true,	//开启小图标
		hidden: true
	}))
	// .use(staticFiles('./public'))	//请求静态文件
	.use('/static', staticFiles(__dirname + '/public'))	//请求静态文件  挂在一个路径上
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(router(routes))

app.listen(3000);
