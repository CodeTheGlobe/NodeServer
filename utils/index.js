const baseUrl = "https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/FirstCentralNigeriaWebService.asmx";

const getUri = (type) => {
    switch(type) {
        case 'login':
            return 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/Login';

        case 'base':
            return "https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/FirstCentralNigeriaWebService.asmx";
        
        case 'consumer_match':
            return 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/ConnectConsumerMatch';

        case 'consumer_fc_report':
            return 'https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService/GetConsumerFullCreditReport';
    }
}
module.exports = {
    getUri
}

