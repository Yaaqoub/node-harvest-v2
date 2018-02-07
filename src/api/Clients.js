let base = require('../mixins/Base.js');

function Clients(options) {
    this.name = 'clients';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Clients.prototype, base);

module.exports = Clients;