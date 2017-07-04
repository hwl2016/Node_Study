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
    var entryJSON = JSON.stringify(this);


}

module.exports = Entry;
