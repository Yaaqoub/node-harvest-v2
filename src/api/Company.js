let Request = require('../Request');

module.exports = class Company {

    constructor(options) {
        this.name = 'company';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    retrieve(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }
}