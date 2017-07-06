/**
 * Created by gaoyanfeng on 2017/7/4.
 */
var redis = require('redis');
var db = redis.createClient();

function Entry(obj) {
    for(key in obj) {
        this[key] = obj[key];
    }
}

Entry.prototype.save = function(cb) {
    var entryJSON = JSON.stringify(this);   //将保存的的消息转成JSON字符串
    db.lpush('entries', entryJSON, (err) => {   //将json字符串保存到redis列表中去
        if(err) return cb(err);
        cb();
    })
}

//获取数据
Entry.getRange = (form, to, cb) => {
    db.lrange('entries', form, to, (err, items) => {
        if(err) return cb(err);
        var entries = [];
        items.forEach((item) => {
            entries.push(JSON.parse(item));
        });
        cb(null, entries);
    })
}

//统计元素的数量
Entry.count = (cb) => {
    db.llen('entries', cb);
}

module.exports = Entry;
