const pick = require('lodash.pick');
const base = require('../mixins/Base');

function Company(options) {
  this.name = 'company';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Company.prototype, pick(base, ['retrieve']));

module.exports = Company;
