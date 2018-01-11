let Request = require('../Request');

module.exports = class Expenses {

    constructor(options) {
        this.name = 'expenses';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(expenseID, cb) {
        this.options.url = this.baseUri + expenseID;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(expenseID, params, cb) {
        this.options.url = this.baseUri + expenseID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(expenseID, cb) {
        this.options.url = this.baseUri + expenseID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}