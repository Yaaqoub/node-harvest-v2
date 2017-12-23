let Request = require('../src/Request');


let headers = {
    account_ID: '842979',
    access_token: '1409550.pt.UsJZAmotXL7HbBy_mRGtPiW5h5-aK_VaRevnPKb1g3EKRPkkQzxwjQYx3k4u5pCYoeAHRCqx0y8FnDtvRq2qtA'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}


new Request(headers, 'estimates', callback);