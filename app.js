var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

//require cors
var cors = require('cors');
//var config = JSON.parse(process.env.APP_CONFIG);
var url = 'mongodb://127.0.0.1:27017/conFusion';
//var url = "mongodb://"+config.mongo.user+":"+encodeURIComponent(mongoPassword)+"@"+config.mongo.hostString;
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',function() {
    //we're connected
    console.log('connected to the database server')
});

var dashboard = require('./routes/dashboard');

var app = express();

//socket.io
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(function(req,res,next) {
    res.io = io;
    next();
})

app.use(logger('dev'));


app.use(cors());

app.use('/dashboard', dashboard);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
    //render the error to you client application
    //res.render('error-404');
    //or
    res.json({
        message:err.message,
        error:err
    });

});

module.exports = {app:app, server:server};
