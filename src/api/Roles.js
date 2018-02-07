let base = require('../mixins/Base.js');

function Roles(options) {
    this.name = 'roles';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Roles.prototype, base);

module.exports = Roles;