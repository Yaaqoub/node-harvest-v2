let base = require('../mixins/Base.js');

function Client_Contacts(options) {
    this.name = 'contacts';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Client_Contacts.prototype, base);

module.exports = Client_Contacts;