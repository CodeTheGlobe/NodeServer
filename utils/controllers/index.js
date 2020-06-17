const soapRequest = require("easy-soap-request");
const xml2js = require("xml-js");


const login = (url,loginHeaders,loginXml) => {

  return new Promise((resolve, reject) => {
    soapRequest({ url: url, headers: loginHeaders, xml: loginXml, timeout: 9000 }) // Optional timeout parameter(milliseconds)
    .then(({response})=> {
        const { headers, body, statusCode } = response;

        const result = JSON.parse(xml2js.xml2json(body, {compact: true, spaces: 4}));
        const res = result['soap:Envelope']['soap:Body'].LoginResponse.LoginResult._text
        resolve(res);
    }).catch(reject)
  });
}

const consumerMatch = (url,consumerMatchHeaders,consumerMatchXml) => {
    return new Promise((resolve, reject) => {
      soapRequest({ url: url, headers: consumerMatchHeaders, xml: consumerMatchXml, timeout: 9000 }) // Optional timeout parameter(milliseconds)
      .then(({response}) => {
        const {headers, body, statusCode} = response;
        
        const result = JSON.parse(xml2js.xml2json(body, {compact: true, spaces: 4}));
        const res = result['soap:Envelope']['soap:Body'].ConnectConsumerMatchResponse.ConnectConsumerMatchResult._text;
        const resToJson = JSON.parse(xml2js.xml2json(res, {compact: true, spaces: 4}));
        resolve(resToJson.ConsumerMtaching.MatchedConsumer);
      }).catch(reject)
    });
}

const consumerFC= (url,consumerFCheaders,consumerFCxml) => {
  return new Promise((resolve, reject) => {
    soapRequest({ url: url, headers: consumerFCheaders, xml: consumerFCxml, timeout: 9000 }) // Optional timeout parameter(milliseconds)
    .then(({response}) => {
      const {headers, body, statusCode} = response;
      
      const result = JSON.parse(xml2js.xml2json(body, {compact: true, spaces: 4}));
      // const res = result['soap:Envelope']['soap:Body'].ConnectConsumerMatchResponse.ConnectConsumerMatchResult._text;
      // const resToJson = JSON.parse(xml2js.xml2json(res, {compact: true, spaces: 4}));
      // resolve(resToJson.ConsumerMtaching.MatchedConsumer);
      console.log(result);
      resolve(res)
    }).catch(reject)
  });
}

module.exports = {
    login,
    consumerMatch,
    consumerFC,
}