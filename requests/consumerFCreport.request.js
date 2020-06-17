const utils = require("../utils");

module.exports = function (request, consumer) {
  const { ConsumerID, EnquiryID, MatchingEngineID } = consumer;
  const consumerFCreportUri = utils.getUri("consumer_fc_report");

  const headers = {
    "user-agent": "sampleTest",
    "Content-Type": "text/xml;charset=UTF-8",
    soapAction: consumerFCreportUri,
  };

  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
  <soapenv:Header/>
  <soapenv:Body>
     <fir:GetConsumerFullCreditReport>
        <!--Optional:-->
        <fir:DataTicket>${request.body.token}</fir:DataTicket>
        <fir:ConsumerID>${ConsumerID._text}</fir:ConsumerID>
        <!--Optional:-->
        <fir:consumerMergeList></fir:consumerMergeList>
        <!--Optional:-->
        <fir:SubscriberEnquiryEngineID>${MatchingEngineID._text}</fir:SubscriberEnquiryEngineID>
        <fir:enquiryID><${EnquiryID._text}/fir:enquiryID>
     </fir:GetConsumerFullCreditReport>
  </soapenv:Body>
</soapenv:Envelope>`;

  return {
    headers,
    xml,
  };
};
