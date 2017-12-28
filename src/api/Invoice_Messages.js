let Request = require('../Request');

module.exports = class Invoice_Messages {

    constructor(options) {
        this.name = 'messages';
        this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
        this.options = options;
    }

    list(id, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;

        new Request(this.options, cb);
    }

    create(invoice_id, params, cb) {
        this.options.url = this.baseUri + invoice_id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(invoice_id, message_id, cb) {
        this.options.url = this.baseUri + invoice_id + '/' + this.name + '/' + message_id;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }

    mark(invoice_id, params, cb) {
        this.options.url = this.baseUri + invoice_id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }
}