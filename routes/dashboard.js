var express = require('express');
var cors = require('cors');
var soap = require('soap');
const soapRequest = require('easy-soap-request');
const fs = require('fs');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//var validate = require('../validate/validate');
//var Heroes = require('../models/Heroes');
var logger = require('morgan');
const xml2js2 = require('xml2js');
const xml2js = require('xml-js');
//const utils = require('../utils'); 

//const parseXML = require('xml-parse-from-string')

//var Verify = require('./verify');

const url = 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/FirstCentralNigeriaWebService.asmx'
//const url = 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/FirstCentralNigeriaWebService.asmx?WSDL'

var heroesRouter = express.Router();
heroesRouter.use(bodyParser.json());



// const data = {
//     func: 'Login',
//     UserName: 'imafidonj',
//     Password: 'imafidon',
// }

// console.log(utils.getRequest(data))
heroesRouter.route('/')

.post(function(request,resp,next) {
// const body = request.body;
//body.func = ''
// const sampleHeaders = {
//   'user-agent': 'sampleTest',
//   'Content-Type': 'text/xml;charset=UTF-8',
//   'soapAction': 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/Login',
// };



// //const xml = fs.readFileSync('routes/zipCodeEnvelope.xml', 'utf-8');
// const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
// <soapenv:Header/>
// <soapenv:Body>
//    <fir:Login>
//       <!--Optional:-->
//       <fir:UserName>${request.body.username}</fir:UserName>
//       <!--Optional:-->
//       <fir:Password>${request.body.password}</fir:Password>
//    </fir:Login>
// </soapenv:Body>
// </soapenv:Envelope>`;




//console.log(typeof xml);

// console.log(url);

//  var xml =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
//  <soapenv:Header/>
//  <soapenv:Body>
//     <fir:Login>
//        <!--Optional:-->
//        <fir:UserName>imafidonj</fir:UserName>
//        <!--Optional:-->
//        <fir:Password>imafidon</fir:Password>
//     </fir:Login>
//  </soapenv:Body>
// </soapenv:Envelope>`;
 
//console.log(xml);
// var token;
// usage of module
// (async () => {
//     const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 9000 }); // Optional timeout parameter(milliseconds)
//     const { headers, body, statusCode } = response;
//     // console.log(headers);
//     // console.log(body);
//     // console.log(statusCode);


//       var result = JSON.parse(xml2js.xml2json(body, {compact: true, spaces: 4}));
//   var res = result['soap:Envelope']['soap:Body'].LoginResponse.LoginResult._text
//   //console.log(res['soap:Envelope']['soap:Body'].LoginResponse.LoginResult._text);
//   console.log(res);
//     //resp.json(res);
// token = res;
  
//   })();

  const sampleHeaders2 = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/ConnectCommercialMatch',
  };
  
  const xml2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
  <soapenv:Header/>
  <soapenv:Body>
     <fir:ConnectConsumerMatch>
        <!--Optional:-->
        <fir:DataTicket>EA00F09E9573FFB272D8036D6C1D09294DDD0CF62667822F9DB2AA5E4DF7651B5FB13CDB9C097B53286979F8A4DA44265D056CA04C83521F4E99193BC52A43CDEE6A058101B0E4EAE3FF90EA2D03D8C1A64B634043A937509301C7D2876AA96A7059B892411D224B9C2079A3210901F09A62840A7F5C9887013185BE433084D77CD912A4A9B10535BB39109966C5C2B5</fir:DataTicket>
        <!--Optional:-->
        <fir:EnquiryReason>Test</fir:EnquiryReason>
        <!--Optional:-->
        <fir:ConsumerName></fir:ConsumerName>
        <!--Optional:-->
        <fir:DateOfBirth></fir:DateOfBirth>
        <!--Optional:-->
        <fir:Identification>22377317600</fir:Identification>
        <!--Optional:-->
        <fir:AccountNumber></fir:AccountNumber>
        <!--Optional:-->
        <fir:ProductID></fir:ProductID>
     </fir:ConnectConsumerMatch>
  </soapenv:Body>
</soapenv:Envelope>`;
  //response.json(res)

  (async () => {
    const { response2 } = await soapRequest({ url: url, headers: sampleHeaders2, xml: xml2, timeout: 9000 }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response2;
    console.log(headers);
    console.log(body);
    console.log(statusCode);


      var result2 = JSON.parse(xml2js.xml2json(body, {compact: true, spaces: 4}));
  var res2 = result2['soap:Envelope']['soap:Body'].LoginResponse.LoginResult._text
  //console.log(res['soap:Envelope']['soap:Body'].LoginResponse.LoginResult._text);
  console.log(res2);
    // resp.json(res);

  
  })();

});



heroesRouter.route('/match')


.get(function(req,res,next) {



});

// heroesRouter.route('/')

// .post(function(req,res,next) {
//    const body = req.body;
// const validator = [
//     {
//         key:"id",
//         type:"number"
//     },
//     {
//         key:"name",
//         type:"string"
//     }
// ]
 
//     validate(body,validator);
    
//     Heroes.create(req.body, function(err,obj) {
//         if(err) return next(err);
//         res.json(obj);
//     });


// });




module.exports = heroesRouter;
