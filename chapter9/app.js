var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var messages = require('./model/messages');
var middlewareUser = require('./middleware/user');

var index = require('./routes/index');
var users = require('./routes/users');
var entry = require('./routes/entry');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.title = "Huwl";

var arr = [];
for(var i = 0; i < 10000; i++) {
    arr.push('key_' + Math.random());
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    name: 'session_id',
    keys: arr,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewareUser);
app.use(messages);

app.use('/', index);
app.use('/users', users);
app.use('/entry', entry);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
