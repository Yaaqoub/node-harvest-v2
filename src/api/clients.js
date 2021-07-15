const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Clients(options) {
  this.name = 'clients';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Clients.prototype, base);

Object.assign(Clients.prototype, pick(filterBase, ['listBy']));

module.exports = Clients;
