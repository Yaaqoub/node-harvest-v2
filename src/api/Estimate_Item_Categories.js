let Request = require('../Request');

module.exports = class Estimate_Item_Categories {

    constructor(options) {
        this.name = 'estimate_item_categories';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }
}