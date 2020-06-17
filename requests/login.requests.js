
const utils = require('../utils')
const loginUri = utils.getUri('login');

module.exports = function(request){
    const headers = {
        'user-agent': 'sampleTest',
        'Content-Type': 'text/xml;charset=UTF-8',
        'soapAction': loginUri,
      };
    
      const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
      <soapenv:Header/>
      <soapenv:Body>
         <fir:Login>
            <!--Optional:-->
            <fir:UserName>${request.body.username}</fir:UserName>
            <!--Optional:-->
            <fir:Password>${request.body.password}</fir:Password>
         </fir:Login>
      </soapenv:Body>
      </soapenv:Envelope>`;

      return {
        headers,
        xml
      } 
}