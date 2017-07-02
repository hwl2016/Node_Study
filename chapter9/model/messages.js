/**
 * Created by huwl on 2017/7/2.
 * 在会话中存放临时的消息
 */
var express = require('express');
var res = express.response; //所有的路由和中间件都能访问到他们

//扩展express的响应原型  res
res.message = function(msg, type) {
    type = type || 'info';
    var sess = this.req.session;
    sess.messages = sess.messages || [];
    sess.messages.push({
        type: type,
        string: msg
    })
}

res.error = function(msg) {
    return this.message(msg, 'error');
}

module.exports = function(req, res, next) {
    res.locals.messages = req.session.messages || [];
    res.locals.removeMessages = function() {
        req.session.messages = [];
    }
    next();
}
