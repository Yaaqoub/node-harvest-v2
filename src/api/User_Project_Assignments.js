let base = require('../mixins/Base2.js');
let pick = require('lodash/pick.js');

function User_Project_Assignments(options) {
    this.name = 'project_assignments';
    this.baseUri = 'https://api.harvestapp.com/v2/users/';
    this.options = options;
}

Object.assign(User_Project_Assignments.prototype, pick(base, ['list']));

module.exports = User_Project_Assignments;