let Request = require('../Request');

module.exports = class User_Project_Assignments {

    constructor(options) {
        this.name = 'project_assignments';
        this.baseUri = 'https://api.harvestapp.com/v2/users/';
        this.options = options;
    }

    list(theUser, cb) {
        this.options.url = this.baseUri + theUser + '/' + this.name;

        new Request(this.options, cb);
    }
}