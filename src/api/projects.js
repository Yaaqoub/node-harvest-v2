const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function Projects(options) {
  this.name = 'projects';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Projects.prototype, base);

Object.assign(Projects.prototype, pick(filterBase, ['listBy']));

module.exports = Projects;
