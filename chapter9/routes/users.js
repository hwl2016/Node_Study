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
    User.auth(name, pass, (err, user) => {
        if(err) {
            res.send(err)
        }else {
            res.send('login sucess')
        }
    })
});

router.post('/register', function(req, res, next) {
    res.send('register success');
});

module.exports = router;
