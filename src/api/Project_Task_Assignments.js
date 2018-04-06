let base = require('../mixins/AssignementBase.js');

function Project_Task_Assignments(options) {
    this.name = 'task_assignments';
    this.baseUri = 'https://api.harvestapp.com/v2/projects/';
    this.options = options;
}

Object.assign(Project_Task_Assignments.prototype, base);

module.exports = Project_Task_Assignments;