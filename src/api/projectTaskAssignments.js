const pick = require('lodash.pick');
const base = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function ProjectTaskAssignments(options) {
  this.name = 'task_assignments';
  this.baseUri = 'https://api.harvestapp.com/v2/projects/';
  this.options = options;
}

Object.assign(ProjectTaskAssignments.prototype, base);

Object.assign(ProjectTaskAssignments.prototype, pick(filterBase, ['listBy']));

module.exports = ProjectTaskAssignments;
