let Request = require('../Request');

module.exports = class Estimate_Line_Item {

    constructor(options) {
        this.name = 'estimates';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    create(id, params, cb) {
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(id, params, cb) {
        if(!params.line_items[0].id)
            return console.log('updating an Estimate Line Item requires an id');

        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }
}