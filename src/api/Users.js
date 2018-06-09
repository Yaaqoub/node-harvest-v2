let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Users(options) {
    this.name = 'users';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Users.prototype, base);

Object.assign(Users.prototype, pick(filterBase, ['listBy']));

module.exports = Users;