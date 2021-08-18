const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function TimeEntries(options) {
  this.name = 'time_entries';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(TimeEntries.prototype, base);

Object.assign(TimeEntries.prototype, pick(filterBase, ['listBy', 'restart', 'stop']));

module.exports = TimeEntries;
