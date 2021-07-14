const pick = require('lodash.pick');
const fetch = require('node-fetch');
const base = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function InvoiceMessages(options) {
  this.name = 'messages';
  this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
  this.options = options;
}

Object.assign(InvoiceMessages.prototype, pick(base, ['list', 'create', 'delete']));

Object.assign(InvoiceMessages.prototype, pick(filterBase, ['listBy']));

InvoiceMessages.prototype.mark = (invoiceId, params, cb) => {
  this.options.url = `${this.baseUri + invoiceId}/${this.name}`;
  this.options.method = 'POST';
  this.options.body = JSON.stringify(params);

  return fetch(this.options.url, this.options)
    .then((res) => res.json())
    .then(cb);
};

module.exports = InvoiceMessages;
