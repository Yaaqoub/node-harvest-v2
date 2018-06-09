let base = require('../mixins/Base2.js'),
    filterBase = require('../mixins/ListFilterBase');

let pick = require('lodash/pick.js');

function User_Project_Assignments(options) {
    this.name = 'project_assignments';
    this.baseUri = 'https://api.harvestapp.com/v2/users/';
    this.options = options;
}

Object.assign(User_Project_Assignments.prototype, pick(base, ['list']));

Object.assign(User_Project_Assignments.prototype, pick(filterBase, ['listBy']));

module.exports = User_Project_Assignments;