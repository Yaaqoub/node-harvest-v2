const pick = require('lodash.pick');
const base = require('../mixins/Base.js');
const filterBase = require('../mixins/ListFilterBase');

function Client_Contacts(options) {
  this.name = 'contacts';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Client_Contacts.prototype, base);

Object.assign(Client_Contacts.prototype, pick(filterBase, ['listBy']));

module.exports = Client_Contacts;
