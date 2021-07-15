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
  const url = `${this.baseUri}/${estimateId}/${this.name}`;
  const method = 'POST';
  const body = JSON.stringify(params);

  return fetch(url, { ...this.options, method, body })
    .then((res) => res.json())
    .then(cb);
};

module.exports = EstimateMessages;
