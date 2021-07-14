const pick = require('lodash.pick');
const fetch = require('node-fetch');
const base2 = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function EstimateMessages(options) {
  this.name = 'messages';
  this.baseUri = 'https://api.harvestapp.com/v2/estimates/';
  this.options = options;
}

Object.assign(EstimateMessages.prototype, pick(base2, ['list', 'create', 'delete']));

Object.assign(EstimateMessages.prototype, pick(filterBase, ['listBy']));

EstimateMessages.prototype.mark = (estimateId, params, cb) => {
  this.options.url = `${this.baseUri}/${estimateId}/${this.name}`;
  this.options.method = 'POST';
  this.options.body = JSON.stringify(params);

  return fetch(this.options.url, this.options)
    .then((res) => res.json())
    .then(cb);
};

module.exports = EstimateMessages;
