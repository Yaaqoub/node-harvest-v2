const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Estimates(options) {
  this.name = 'estimates';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Estimates.prototype, base);

Object.assign(Estimates.prototype, pick(filterBase, ['listBy']));

module.exports = Estimates;
