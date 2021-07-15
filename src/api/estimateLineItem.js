const pick = require('lodash.pick');
const base = require('../mixins/Base');

function EstimateLineItem(options) {
  this.name = 'estimates';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(EstimateLineItem.prototype, pick(base, ['create', 'update', 'delete']));

module.exports = EstimateLineItem;
