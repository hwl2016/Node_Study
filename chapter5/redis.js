var redis = require('redis');

//连接redis
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(err) {
	console.log('Error: ' + err);
})

//操作redis的数据
client.set('color', 'red', redis.print);	//print 函数输出操作的结果  或者在出错的时候输出错误
client.get('color', (err, value) => {
	if(err) throw err;
	console.log('Got: ' + value);
})

//用hash表存储和获取数据
client.hmset('camping', {
	a: 'aaa',
	b: 'bbb'
}, redis.print);

client.hget('camping', 'a', (err, value) => {
	if(err) throw err;
	console.log(`a: ${value}`);
})

client.hkeys('camping', (err, keys) => {	//获取hash表的键
	if(err) throw err;
	keys.forEach((key, i) => {
		console.log(' ' + key);
	})
})


//用链表存储和获取数据
client.lpush('task', 'process_1', redis.print);
client.lpush('task', 'process_2', redis.print);
client.lrange('task', 0, -1, (err, items) => {
	if(err) throw err;
	items.forEach((item, i) => {
		console.log(' ' + item);
	})
})

//用集合存储和获取数据
client.sadd('ip', '204.37.45.101', redis.print);
client.sadd('ip', '204.37.45.102', redis.print);
client.sadd('ip', '204.37.45.103', redis.print);
client.smembers('ip', (err, members) => {
	if(err) throw err;
	console.log(members);	//无序 但唯一
})




