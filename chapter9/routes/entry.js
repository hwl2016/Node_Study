/**
 * Created by gaoyanfeng on 2017/7/5.
 */
var express = require('express');
var router = express.Router();
var Entry = require('../model/entry');

router.get('/', (req, res, next) => {
    Entry.getRange(0, -1, (err, entries) => {
        if(err) return next(err);
        res.render('entries', {
            title: 'entries',
            entries: entries
        })
    })
})

router.get('/post', (req, res, next) => {
    res.render('post', {title: 'POST'});
})

router.post('/post', (req, res, next) => {
    var title = req.body.title;
    var body = req.body.body;
    // var username = res.locals.user.name;

    var entry = new Entry({
        // username: username,
        title: title,
        body: body
    })

    entry.save((err) => {
        if(err) return next(err);
        res.redirect('/')
    })
})

module.exports = router;
