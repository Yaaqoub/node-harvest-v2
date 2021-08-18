const pick = require('lodash.pick');
const base = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function InvoicePayments(options) {
  this.name = 'payments';
  this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
  this.options = options;
}

Object.assign(InvoicePayments.prototype, pick(base, ['list', 'create', 'delete']));

Object.assign(InvoicePayments.prototype, pick(filterBase, ['listBy']));

module.exports = InvoicePayments;
