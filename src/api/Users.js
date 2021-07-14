const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Users(options) {
  this.name = 'users';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Users.prototype, base);

Object.assign(Users.prototype, pick(filterBase, ['listBy']));

module.exports = Users;
