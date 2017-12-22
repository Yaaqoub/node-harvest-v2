let request = require('request');

module.exports.Harvest = function(headers, name) {
    let thisHeaders = {
        'Harvest-Account-ID': headers.account_ID,
        'Authorization': 'Bearer ' + headers.access_token,
        'User-Agent': 'Harvest API'
    };

    let options = {
        url: 'https://api.harvestapp.com/api/v2/' + name,
        headers: thisHeaders
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    request(options, callback);
};
