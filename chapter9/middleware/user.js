/**
 * Created by gaoyanfeng on 2017/7/3.
 */
var User = require('../model/User');

module.exports = function(req, res, next) {
    var uid = req.session.uid;
    if(!uid) return next();
    User.get(uid, (err, user) => {
        if(err) return next(err);
        req.user = res.locals.user = user;
        next();
    })
}
