const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ExpenseCategories(options) {
  this.name = 'expense_categories';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ExpenseCategories.prototype, base);

Object.assign(ExpenseCategories.prototype, pick(filterBase, ['listBy']));

module.exports = ExpenseCategories;
