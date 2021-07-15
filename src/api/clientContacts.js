const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ClientContacts(options) {
  this.name = 'contacts';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ClientContacts.prototype, base);

Object.assign(ClientContacts.prototype, pick(filterBase, ['listBy']));

module.exports = ClientContacts;
