const pick = require('lodash.pick');
const base = require('../mixins/Base');

function InvoiceLineItem(options) {
  this.name = 'invoices';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(InvoiceLineItem.prototype, pick(base, ['create', 'update', 'delete']));

module.exports = InvoiceLineItem;
