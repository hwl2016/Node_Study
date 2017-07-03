var express = require('express');
var router = express.Router();
var User = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.post('/login', function(req, res, next) {
    var name = req.body.username;
    var pass = req.body.password;
    // console.log(res.message());
    User.auth(name, pass, (err, user) => {
        if(err) return next(err);

        if(user) {
            req.session.uid = user.id;
            res.redirect('/')
        }else {
            res.error('用户名或密码错误');
            res.redirect('back');
        }
    })
});

router.post('/register', function(req, res, next) {
    var name = req.body.username;
    var pass = req.body.pass;
    var passagin = req.body.passagin;
    if(pass !== passagin) {
        res.send('两次输入的密码不一致');
    }else {
        User.getByName(name, (err, user) => {
            if(err) return next(err);
            if(user.id) {
                res.error('用户名已存在');
                res.redirect('back');
            } else {
                user = new User({
                    name: name,
                    pass: pass
                });
                user.save(function(err) {
                    if(err) return next(err);
                    req.session.uid = user.id;
                    res.redirect('/');
                })
            }
        })
    }
});

module.exports = router;
