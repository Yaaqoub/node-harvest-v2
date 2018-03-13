let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Time_Entries(options) {
    this.name = 'time_entries';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Time_Entries.prototype, base);

Object.assign(Time_Entries.prototype, pick(filterBase, ['listBy', 'restart', 'stop']));

module.exports = Time_Entries;