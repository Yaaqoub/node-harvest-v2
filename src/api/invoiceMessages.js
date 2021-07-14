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
  const url = `${this.baseUri + invoiceId}/${this.name}`;
  const method = 'POST';
  const body = JSON.stringify(params);

  return fetch(url, { method, body })
    .then((res) => res.json())
    .then(cb);
};

module.exports = InvoiceMessages;
