let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Invoices(options) {
    this.name = 'invoices';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Invoices.prototype, base);

Object.assign(Invoices.prototype, pick(filterBase, ['listBy']));

module.exports = Invoices;