const pick = require('lodash.pick');
const base = require('../mixins/Base2');

function UserBillableRates(options) {
  this.name = 'billable_rates';
  this.baseUri = 'https://api.harvestapp.com/v2/users/';
  this.options = options;
}

Object.assign(UserBillableRates.prototype, pick(base, ['list', 'retrieve', 'create']));

module.exports = UserBillableRates;
