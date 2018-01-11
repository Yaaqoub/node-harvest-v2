let Request = require('../Request');

module.exports = class Project_Task_Assignments {

    constructor(options) {
        this.name = 'task_assignments';
        this.baseUri = 'https://api.harvestapp.com/v2/projects/';
        this.options = options;
    }

    list(projectID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;

        new Request(this.options, cb);
    }

    retrieve(projectID, taskAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;

        new Request(this.options, cb);
    }

    create(projectID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(projectID, taskAssignmentsID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(projectID, taskAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}