var connect = require("connect");
var query = require("connect-query");
var path = require("path");
var router = require('./router');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

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
			// res.end('haha');
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

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

var app = connect();

app
	.use(logger('common'))
	.use(logger('combined', {
		stream: accessLogStream,
		immediate: true
	}))
	.use(bodyParser.urlencoded({ extended: false }))	//解析form表单提交
	.use(bodyParser.json())	//解析json提交
	.use(multiparty())	//解析文件上传
	.use(query())	//查询字符串
	.use(cookieParser())	//解析cookie
	// .use(methodOverride('X-HTTP-Method-Override'))
	.use(methodOverride(function(req, res) {	//要放在bodyParser和multipart的下面

		// if(req.headers && typeof req.headers === 'object' && 'x-http-method-override' in req.headers) {
		// 	console.log('X-HTTP-Method-Override');
		// 	var method = req.headers['x-http-method-override'];
		// 	return method;
		// }

		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		    var method = req.body._method
		    delete req.body._method
		    return method;
		}
	}))
	.use(router(routes));

app.listen(3000);