let Request = require('../Request');

module.exports = class Tasks {

    constructor(options) {
        this.name = 'tasks';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(taskID, cb) {
        this.options.url = this.baseUri + taskID;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(taskID, params, cb) {
        this.options.url = this.baseUri + taskID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(taskID, cb) {
        this.options.url = this.baseUri + taskID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}