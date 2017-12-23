let request = require('request');

module.exports = class Request {
    /**
     *
     * @param headers
     * @param name
     * @param cb
     */
    constructor(headers, name, cb) {
        let thisHeaders = {
            'Harvest-Account-ID': headers.account_ID,
            'Authorization': 'Bearer ' + headers.access_token,
            'User-Agent': 'Harvest API'
        };


        let options = {
            url: 'https://api.harvestapp.com/api/v2/' + name,
            headers: thisHeaders
        };

        request(options, cb);
    }
}