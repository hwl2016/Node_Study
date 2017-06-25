var mongodb = require('mongodb');

//连接mongodb
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('test_1', server, {w: 1});

// var _id = new client.bson_serializer.ObjectId('594f24c8e33f0ea6e8d6f680');

//访问mongodb集合
client.open((err) => {
	if(err) throw err;
	client.collection('games', (err, collection) => {
		if(err) throw err;
		console.log('connect mongodb success!');

		//将文档插入到集合中
		/*collection.insert(
			{
				_id: '111111111',
				title: 'haha',
				body: '123456',
				age: 120
			},
			{safe: true},	//安全模式：数据库操作应该在回调函数执行之前完成
			(err, documents) => {
				if(err) throw err;
				// console.log(documents);
				console.log('Document Id is: ' + documents.ops[0]._id);
			}
		);*/

		//用文档的id更新数据
		collection.update(
			{_id: '111111111'},
			{$set: {age: 200}},
			{safe: true},
			(err) => {
				if(err) throw err;
			}
		);

	})
})


