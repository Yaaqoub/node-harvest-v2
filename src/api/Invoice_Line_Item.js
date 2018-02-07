let base = require('../mixins/Base.js');
let pick = require('lodash/pick.js');

function Invoice_Line_Item(options) {
    this.name = 'invoices';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Invoice_Line_Item.prototype, pick(base, ['create', 'update', 'delete']));

module.exports = Invoice_Line_Item;