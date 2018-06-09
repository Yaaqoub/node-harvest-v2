let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Expense_Categories(options) {
    this.name = 'expense_categories';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Expense_Categories.prototype, base);

Object.assign(Expense_Categories.prototype, pick(filterBase, ['listBy']));

module.exports = Expense_Categories;