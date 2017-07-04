var express = require('express');
var router = express.Router();
var testController=require('./testController');


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

router.post('/upload', function(req, res, next) {
    res.json({
        haha: '123'
    })
})

function upload(oldPath, newPath, cb) {
    fs.readFile( oldPath, function (err, data) {
        if(err) {
            console.log(err);
            return
        }
        fs.writeFile(newPath, data, function (err) {
            if(err) {
                console.log(err);
                return
            }
            console.log( 'File uploaded successfully' );
            cb(err);
        });
    });
}

module.exports = router;
