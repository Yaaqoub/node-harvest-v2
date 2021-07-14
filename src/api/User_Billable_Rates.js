const pick = require('lodash.pick');
const base = require('../mixins/Base2.js');

function User_Cost_Rates(options) {
  this.name = 'billable_rates';
  this.baseUri = 'https://api.harvestapp.com/v2/users/';
  this.options = options;
}

Object.assign(User_Cost_Rates.prototype, pick(base, ['list', 'retrieve', 'create']));

module.exports = User_Cost_Rates;
