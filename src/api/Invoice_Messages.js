const pick = require('lodash.pick');
const fetch = require('node-fetch');
const base = require('../mixins/Base2.js');
const filterBase = require('../mixins/ListFilterBase');

function Invoice_Messages(options) {
  this.name = 'messages';
  this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
  this.options = options;
}

Object.assign(Invoice_Messages.prototype, pick(base, ['list', 'create', 'delete']));

Object.assign(Invoice_Messages.prototype, pick(filterBase, ['listBy']));

Invoice_Messages.prototype.mark = function (invoice_id, params, cb) {
  this.options.url = `${this.baseUri + invoice_id}/${this.name}`;
  this.options.method = 'POST';
  this.options.body = JSON.stringify(params);

  return fetch(this.options.url, this.options)
    .then((res) => res.json())
    .then(cb);
};

module.exports = Invoice_Messages;
