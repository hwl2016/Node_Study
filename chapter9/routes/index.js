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

module.exports = router;
