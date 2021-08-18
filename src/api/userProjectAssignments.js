const pick = require('lodash.pick');
const base = require('../mixins/Base2');
const filterBase = require('../mixins/ListFilterBase');

function UserProjectAssignments(options) {
  this.name = 'project_assignments';
  this.baseUri = 'https://api.harvestapp.com/v2/users/';
  this.options = options;
}

Object.assign(UserProjectAssignments.prototype, pick(base, ['list']));

Object.assign(UserProjectAssignments.prototype, pick(filterBase, ['listBy']));

module.exports = UserProjectAssignments;
