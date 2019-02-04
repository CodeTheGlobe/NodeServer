var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Heroes = require('../models/Heroes');
//var Verify = require('./verify');




var heroesRouter = express.Router();
heroesRouter.use(bodyParser.json());

heroesRouter.route('/')


.get(function(req,res,next) {
    var date = req.query.date;
    var month = req.query.month;
    console.log(date);
    console.log(month);


     Heroes.find({}, function(err,obj){
         if(err) throw err;
         res.json(obj);

     });


});

heroesRouter.route('/')


.post(function(req,res,next) {
    Heroes.create(req.body, function(err,obj) {
        if(err) return next(err);
        res.json(obj);
    });


});
//
//.delete(function(req,res,next) {
//    Heroes.remove({}, function(err, resp){
//        if(err) return next(err);
//        res.json(resp);
//    });
//});

//heroesRouter.route('/month')
//.get(function(req,res,next) {
//    var date = req.query.date;
//    var month = req.query.month;
//    console.log(date);
//    console.log(month);
//
//     Heroes.find({month:month}, function(err,obj){
//         if(err) throw err;
//         res.json(obj);
//
//     });
//
//
//})




module.exports = heroesRouter;
