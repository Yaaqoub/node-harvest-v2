let Request = require('../Request');

module.exports = class Expense_Categories {

    constructor(options) {
        this.name = 'expense_categories';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(expenseCategoryID, cb) {
        this.options.url = this.baseUri + expenseCategoryID;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(expenseCategoryID, params, cb) {
        this.options.url = this.baseUri + expenseCategoryID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(expenseCategoryID, cb) {
        this.options.url = this.baseUri + expenseCategoryID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}