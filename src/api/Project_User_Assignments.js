let Request = require('../Request');

module.exports = class Project_User_Assignments {

    constructor(options) {
        this.name = 'user_assignments';
        this.baseUri = 'https://api.harvestapp.com/v2/projects/';
        this.options = options;
    }

    list(projectID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;

        new Request(this.options, cb);
    }

    retrieve(projectID, userAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + userAssignmentsID;

        new Request(this.options, cb);
    }

    create(projectID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(projectID, userAssignmentsID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + userAssignmentsID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(projectID, userAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + userAssignmentsID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}