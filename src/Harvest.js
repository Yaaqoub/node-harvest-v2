let HeaderAuth = require('./authentication/HeaderAuth'),
    Request = require('./Request');

module.exports = class Harvest {
    constructor(config) {
        this.headerAuth = new HeaderAuth(config);

        this.options = {
            url: 'https://api.harvestapp.com/v2/estimates',
            headers: this.headerAuth.header()
        }
    }

    //Just Test
    estimatesList() {
        new Request(this.options, function results(error, response, body) {
            if (!error && response.statusCode == 200) {
                //console.log(body);
            }
        });
    }
}