let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Client_Contacts(options) {
    this.name = 'contacts';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Client_Contacts.prototype, base);

Object.assign(Client_Contacts.prototype, pick(filterBase, ['listBy']));

module.exports = Client_Contacts;