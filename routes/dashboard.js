var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var validate = require('../validate/validate');
var Heroes = require('../models/Heroes');
//var Verify = require('./verify');




var heroesRouter = express.Router();
heroesRouter.use(bodyParser.json());

heroesRouter.route('/')


.get(function(req,res,next) {

     Heroes.find({}, function(err,obj){
         if(err) throw err;
         res.json(obj);

     });


});

heroesRouter.route('/')

.post(function(req,res,next) {
   const body = req.body;
const validator = [
    {
        key:"id",
        type:"number"
    },
    {
        key:"name",
        type:"string"
    }
]
 
    validate(body,validator);
    
    Heroes.create(req.body, function(err,obj) {
        if(err) return next(err);
        res.json(obj);
    });


});




module.exports = heroesRouter;
