const pick = require('lodash.pick');
const fetch = require('node-fetch');
const base2 = require('../mixins/Base2.js');
const filterBase = require('../mixins/ListFilterBase');

function Estimate_Messages(options) {
  this.name = 'messages';
  this.baseUri = 'https://api.harvestapp.com/v2/estimates/';
  this.options = options;
}

Object.assign(Estimate_Messages.prototype, pick(base2, ['list', 'create', 'delete']));

Object.assign(Estimate_Messages.prototype, pick(filterBase, ['listBy']));

Estimate_Messages.prototype.mark = function (estimate_id, params, cb) {
  this.options.url = `${this.baseUri}/${estimate_id}/${this.name}`;
  this.options.method = 'POST';
  this.options.body = JSON.stringify(params);

  return fetch(this.options.url, this.options)
    .then((res) => res.json())
    .then(cb);
};

module.exports = Estimate_Messages;
