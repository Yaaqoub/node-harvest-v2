let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Clients(options) {
    this.name = 'clients';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Clients.prototype, base);

Object.assign(Clients.prototype, pick(filterBase, ['listBy']));

module.exports = Clients;