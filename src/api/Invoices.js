let Request = require('../Request');

module.exports = class Invoices {

    constructor(options) {
        this.name = 'invoices';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }
}