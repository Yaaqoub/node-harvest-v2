let base = require('../mixins/Base2.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Project_Task_Assignments(options) {
    this.name = 'task_assignments';
    this.baseUri = 'https://api.harvestapp.com/v2/projects/';
    this.options = options;
}

Object.assign(Project_Task_Assignments.prototype, base);

Object.assign(Project_Task_Assignments.prototype, pick(filterBase, ['listBy']));

module.exports = Project_Task_Assignments;