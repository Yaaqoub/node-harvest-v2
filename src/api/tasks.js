const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Tasks(options) {
  this.name = 'tasks';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Tasks.prototype, base);

Object.assign(Tasks.prototype, pick(filterBase, ['listBy']));

module.exports = Tasks;
