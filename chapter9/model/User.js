var redis = require('redis');
var bcrypt = require('bcrypt-nodejs');

var db = redis.createClient();

function User(obj) {
    for (key in obj) {
        this[key] = obj[key];
    }
}

User.prototype = {
    save: function (cb) {
        if (this.id) {	//用户已存在
            this.update(cb);
        } else {
            var user = this;
            db.incr('user:ids', (err, id) => {	//创建唯一id
                if (err) return cb(err);
                user.id = id;	//设定id 以便保存
                user.hashPassword((err) => {	//密码加密
                    if (err) return cb(err);
                    user.update(cb);	//保存用户属性
                })
            })
        }
    },
    update: function (cb) {
        var user = this;
        var id = user.id;
        db.set('user:id:' + user.name, id, (err) => {	//用户名称索引用户ID
            if (err) return cb(err);
            db.hmset('user:' + id, user, (err) => {	//用redis哈希存储
                cb(err);
            });
        })
    },
    hashPassword: function (cb) {
        var user = this;
        bcrypt.genSalt(12, (err, salt) => {	//生成12个字符的盐
            if (err) return cb(err);
            user.salt = salt;
            bcrypt.hash(user.pass, salt, null, (err, hash) => {	//设定盐以便保存
                if (err) return cb(err);
                user.pass = hash;	//设定哈希以便保存
                cb();
            })
        })
    }
}

User.getByName = function (name, cb) {
    User.getId(name, (err, id) => {
        if (err) return cb(err);
        User.get(id, cb);
    })
}

User.getId = function (name, cb) {
    db.get('user:id:' + name, cb);
}

User.get = function (id, cb) {
    db.hgetall('user:' + id, (err, user) => {
        if (err) return cb(err);
        cb(null, new User(user));
    })
}

User.auth = function (name, pass, cb) {
    User.getByName(name, (err, user) => {
        if (err) return cb(err);
        if (!user.id) return cb();	//用户不存在

        //对给出的密码做hash处理
        bcrypt.hash(pass, user.salt, null, (err, hash) => {
            if (err) return cb(err);
            if (hash == user.pass) {
                return cb(null, user);
            }
            cb();	//密码无效
        })
    })
}

// var tobi = new User({
// 	name: 'Tobi',
// 	pass: '123456',
// 	age: 20
// })

// tobi.save((err) => {
// 	if(err) throw err;
// 	console.log('user id %d', tobi.id);
// })

module.exports = User;
