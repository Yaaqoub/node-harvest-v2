let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Estimates(options) {
    this.name = 'estimates';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Estimates.prototype, base);

Object.assign(Estimates.prototype, pick(filterBase, ['listBy']));

module.exports = Estimates;