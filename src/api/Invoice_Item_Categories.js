let base = require('../mixins/Base.js');

function Invoices(options) {
    this.name = 'invoice_item_categories';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Invoices.prototype, base);

module.exports = Invoices;