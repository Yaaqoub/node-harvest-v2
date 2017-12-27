let Request = require('../Request');

module.exports = class Invoice_Line_Item {

    constructor(options) {
        this.name = 'invoices';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    create(id, params, cb){
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }
}