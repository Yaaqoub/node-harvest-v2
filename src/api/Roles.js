const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Roles(options) {
  this.name = 'roles';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Roles.prototype, base);

Object.assign(Roles.prototype, pick(filterBase, ['listBy']));

module.exports = Roles;
