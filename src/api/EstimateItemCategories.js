const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function EstimateItemCategories(options) {
  this.name = 'estimate_item_categories';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(EstimateItemCategories.prototype, base);

Object.assign(EstimateItemCategories.prototype, pick(filterBase, ['listBy']));

module.exports = EstimateItemCategories;
