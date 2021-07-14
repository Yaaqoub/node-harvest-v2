const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Invoices(options) {
  this.name = 'invoice_item_categories';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Invoices.prototype, base);

Object.assign(Invoices.prototype, pick(filterBase, ['listBy']));

module.exports = Invoices;
