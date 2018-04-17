let base = require('../mixins/Base2.js');

function Project_User_Assignments(options) {
    this.name = 'user_assignments';
    this.baseUri = 'https://api.harvestapp.com/v2/projects/';
    this.options = options;
}

Object.assign(Project_User_Assignments.prototype, base);

module.exports = Project_User_Assignments;