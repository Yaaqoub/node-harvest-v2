const pick = require('lodash.pick');
const base = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function ProjectUserAssignments(options) {
  this.name = 'user_assignments';
  this.baseUri = 'https://api.harvestapp.com/v2/user_assignments/';
  this.options = options;
}

Object.assign(ProjectUserAssignments.prototype, base);

Object.assign(ProjectUserAssignments.prototype, pick(filterBase, ['listBy']));

module.exports = ProjectUserAssignments;
