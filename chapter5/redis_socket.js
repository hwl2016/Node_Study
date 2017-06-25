var net = require('net');
var redis = require('redis');

//用信道传递数据
var server = net.createServer((socket) => {
	var subscriber, publisher;

	socket.on('connect', () => {
		subscriber = redis.createClient();	//为用户创建预定客户端
		subscriber.subscribe('main_chat_room');	//预定信道
		subscriber.on('message', (channel, message) => {	//监听事件 将收到的信息发给用户
			socket.write('Channel ' + channel + ': ' + message);
		});
		publisher = redis.createClient;	//为用户创建发布客户端
	})

	socket.on('data', (data) => {
		publisher.publish('main_chat_room', data);	//用户输入消息后发布它
	})

	socket.on('end', () => {
		subscriber.unsubscribe('main_chat_room');	//如果用户断开连接，终止客户端连接
		subscriber.end();
		publisher.end();
	})

})

server.listen(3000);