var express = require('express');
var router = express.Router();
var Photo = require('../model/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  Photo.find({}, (err, photos) => {
  	if(err) return next(err);
    res.render('index', {photoList: photos});
  })
});

module.exports = router;
