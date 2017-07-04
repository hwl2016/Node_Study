var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')    //设置上传后文件路径，uploads文件夹会自动创建。
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");    //获取文件的扩展名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
})

var upload = multer({ storage: storage })

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

router.post('/upload', upload.single('avatar'), function(req, res, next) {
    var userName = req.body.username;
    var pass = req.body.pass;
    res.json({
        code: 200,
        msg: 'success'
    })
})

router.post('/test', function(req, res, next) {
    res.json({
        code: 200,
        msg: 'test'
    })
})

module.exports = router;
