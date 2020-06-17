var express = require("express");
var cors = require("cors");
var soap = require("soap");
const fs = require("fs");
var bodyParser = require("body-parser");
var logger = require("morgan");

const loginRequest = require("../requests/login.requests");
const consumerMatchRequest = require("../requests/consumermatch.request");
const consumerFCrequest =  require("../requests/consumerFCreport.request")
const { login, consumerMatch, consumerFC } = require("../utils/controllers");
const utils = require("../utils");

const url = utils.getUri("base");

var heroesRouter = express.Router();
heroesRouter.use(bodyParser.json());

heroesRouter
  .route("/")

  .post(async function (request, resp, next) {
    try {
      //Login
      const { headers: loginHeaders, xml: loginXml } = loginRequest(request);
      const token = await login(url, loginHeaders, loginXml);
      //Consumer match
      // Attach token to request body
      request.body.token = token;
      const {
        headers: consumerMatchHeaders,
        xml: consumerMatchXml,
      } = consumerMatchRequest(request);

      const consumer = await consumerMatch(
        url,
        consumerMatchHeaders,
        consumerMatchXml
      );
      //Consumer FC Request
      const {
        headers: consumer_fc_headers,
        xml: consumer_fc_xml,
      } = consumerFCrequest(request, consumer);

      const report = await consumerFC(url,consumer_fc_headers, consumer_fc_xml);
      console.log(report);
      resp.sendStatus(200)
    } catch (e) {
      console.log('here is haopening')
      next(e);
    }
  });

module.exports = heroesRouter;
