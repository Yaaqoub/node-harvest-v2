let base = require('../mixins/Base.js');

function Users(options) {
    this.name = 'users';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Users.prototype, base);

module.exports = Users;