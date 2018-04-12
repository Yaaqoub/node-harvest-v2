let request = require('request-promise');

const assignementBase = {

    list(projectID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;
        return request(this.options, cb);
    },

    retrieve(projectID, taskAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;
        return request(this.options, cb);
    },

    create(projectID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);
        return request(this.options, cb);
    },

    update(projectID, taskAssignmentsID, params, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);
        return request(this.options, cb);
    },

    delete(projectID, taskAssignmentsID, cb) {
        this.options.url = this.baseUri + projectID + '/' + this.name + '/' + taskAssignmentsID;
        this.options.method = 'DELETE';
        return request(this.options, cb);
    }
};

module.exports = assignementBase;