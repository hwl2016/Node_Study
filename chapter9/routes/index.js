var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/page/login', function(req, res, next) {
  res.render('login');
});

router.get('/page/register', function(req, res, next) {
    res.render('register');
});

router.get('/logout', function(req, res, next) {
    // req.session.destroy(function(err) {
    //     if(err) throw err;
    //     res.redirect('/');
    // })

    // console.log(req.session)
    req.session.uid = null; //使用这种方法来销毁session
    res.redirect('/');
    // console.log(req.session)
});

module.exports = router;
