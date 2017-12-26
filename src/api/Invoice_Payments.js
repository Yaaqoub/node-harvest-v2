let Request = require('../Request');

module.exports = class Invoice_Payments {

    constructor(options) {
        this.name = 'payments';
        this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
        this.options = options;
    }

    list(id, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;

        new Request(this.options, cb);
    }
}