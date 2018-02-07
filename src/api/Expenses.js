let base = require('../mixins/Base.js');

function Expenses(options) {
    this.name = 'expenses';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Expenses.prototype, base);

module.exports = Expenses;