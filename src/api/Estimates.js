let Request = require('../Request');

module.exports = class Estimates {

    constructor(options) {
        this.name = 'estimates';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    list() {
        this.options.url = this.baseUri;
        new Request(this.options, function results(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        });
    }
}