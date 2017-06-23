const parse = require('url').parse;

function router(obj) {
	return function(req, res, next) {
		if(req.headers['x-http-method-override']) {
			console.log('X-HTTP-Method-Override ', req.headers['x-http-method-override']);
			req.method = req.headers['x-http-method-override'];
		}

		if(!obj[req.method]) {
			next();
			return;
		}
		var routes = obj[req.method];
		var url = parse(req.url);
		var paths = Object.keys(routes);

		if(req.headers['content-type'] == 'application/json') {	//解析header
			console.log(req.query);	//解析查询字符串
		}else {
			console.log(req.body);	//解析请求的body
			console.log(req.files);	//解析上传的文件
		}

		console.log('method: ', req.method);	
		console.log('originalMethod: ', req.originalMethod);	

		// console.log(req.cookies);	//解析普通的cookie
		// console.log(req.signedCookies);	//解析签名的cookie

		for(var i = 0, len = paths.length; i < len; i++) {
			var path =  paths[i];
			var fn = routes[path];
			path.replace(/\//g, '\\/').replace(/:(\w+)/g, '([^\\/]+)');
			var reg = new RegExp('^' + path + '$');

			var captures = url.pathname.match(reg);
			if(captures) {
				var args = [req, res];
				fn.apply(null, args);
				return;
			}
		}
		next();
	}
}

module.exports = router;