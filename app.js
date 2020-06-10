var express = require('express');


//var mongoose = require('mongoose');

//require cors
var cors = require('cors');
var soap = require('soap');
// const EasySoap = require('easysoap');
// const soapClient = EasySoap(params, opts);
const soapRequest = require('easy-soap-request');
const fs = require('fs');
var logger = require('morgan');
const xml2js = require('xml-js');

//var url = 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/FirstCentralNigeriaWebService.asmx?WSDL'

//var config = JSON.parse(process.env.APP_CONFIG);
//var url = 'mongodb://127.0.0.1:27017/conFusion';
//var url = "mongodb://"+config.mongo.user+":"+encodeURIComponent(mongoPassword)+"@"+config.mongo.hostString;
//mongoose.connect(url);

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));

//db.once('open',function() {
    //we're connected
//    console.log('connected to the database server')
//});

// example data
//const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';



var app = express();

var server = require('http').Server(app);
console.log("server connected");

app.use(logger('dev'));

var login = require('./routes/dashboard');
var match = require('./routes/dashboard');


app.use(cors());

app.use('/login', login);
//app.use('/match', match);


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
 
    res.json({
        message:err.message,
        error:err
    });

});

module.exports = {app:app, server:server};
