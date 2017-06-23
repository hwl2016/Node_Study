var connect = require('connect');

var app = connect();
app.use(logger);	//调用use方法来使用日志中间件
app.use('/user', hello);	//调用use方法来使用hello中间件

app.listen(3333);

//定义一个日志中间件
function logger(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();	//next就是将函数控制权交给下一个组件
}

//给页面响应的中间件
function hello(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
}