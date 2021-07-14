const pick = require('lodash.pick');
const base = require('../mixins/Base2');

function UserCostRates(options) {
  this.name = 'cost_rates';
  this.baseUri = 'https://api.harvestapp.com/v2/users/';
  this.options = options;
}

Object.assign(UserCostRates.prototype, pick(base, ['list', 'retrieve', 'create']));

module.exports = UserCostRates;
