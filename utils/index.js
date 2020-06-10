 function getRequest(body) {
    const {func, ...rest} = body;
    const val = Object.keys(rest);
    let start = '';
    val.forEach(el => start +=` <fir:${el}>${body[el]}<fir:${el}>`)
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fir="https://online.firstcentralcreditbureau.com/FirstCentralNigeriaWebService">
    <soapenv:Header/>
    <soapenv:Body>
    <fir:${func}>
       ${start}
    </fir:${func}>
    </soapenv:Body>
    </soapenv:Envelope>`
}

module.exports = {getRequest}