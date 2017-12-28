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

    create(id, params, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(invoice_id, payment_id, cb) {
        this.options.url = this.baseUri + invoice_id + '/' + this.name + '/' + payment_id;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}