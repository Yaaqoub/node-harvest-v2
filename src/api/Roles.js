let Request = require('../Request');

module.exports = class Roles {

    constructor(options) {
        this.name = 'roles';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(roleID, cb) {
        this.options.url = this.baseUri + roleID;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(roleID, params, cb) {
        this.options.url = this.baseUri + roleID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(roleID, cb) {
        this.options.url = this.baseUri + roleID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}