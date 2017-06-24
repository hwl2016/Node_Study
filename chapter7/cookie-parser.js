var connect = require('connect');
var express = require('express');
var router = require('./router');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var routes = {
	GET: {
		'/users': function(req, res) {
			console.log('cookies', req.cookies);
			console.log('signedCookies', req.signedCookies);

			//connect模块没有提供出站的cookie设置 只能通过setHeader来设置出站cookie
			// res.setHeader('Set-Cookie', 'haha=1234');

			//express模块提供出站的cookie设置
			//签名的cookie  s%3A20.1o23FLhnDd3nra3uOEDI9t11mzdNogb2QEnRBgSOPHw
			res.cookie('age', '20', {
				signed: true,	//设置签名cookie
			});	

			//删除cookie, express模块提供的方法
			if(res.cookie('name')) {
				res.clearCookie('name');
			}

			//session
			console.log(req.session['test']);	//取出名为test的session
			if(!req.session['test']) {
				console.log('这是第一次访问');
				req.session['test'] = 'haha';
			}else {
				console.log('这不是第一次访问');
			}

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

var arr = [];
for(var i = 0; i < 10000; i++) {
	arr.push('key_' + Math.random());
}

var app = express()
	.use(cookieParser('这段签名的字符串可以是随意的'))	//设置签名随机字符串
	.use(cookieSession({	//使用session  必须放在cookie的后面
		keys: arr,	//额外的给他一个keys用于加密
		name: 'session_id',	//加密的cookie的名字，最后通过这个来从服务端查找到对应的人
		maxAge: 10*60*1000,  //session保存10分钟
		httpOnly: true,	//是否能被客户端访问
		path: '/users',	//设置cookie的路径
		signed: true,	//设置签名
	}))
	.use(router(routes));

app.listen(3000);