const utils = require("../utils");

module.exports = function (request) {
  const consumerMatchUri = utils.getUri("consumer_match");
  const headers = {
    "user-agent": "sampleTest",
    "Content-Type": "text/xml;charset=UTF-8",
    soapAction: consumerMatchUri,
  };

  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
  <soapenv:Header/>
  <soapenv:Body>
     <fir:ConnectConsumerMatch>
        <!--Optional:-->
        <fir:DataTicket>${request.body.token}</fir:DataTicket>
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

  return {
    headers,
    xml,
  };
};
