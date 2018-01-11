let Request = require('../Request');

module.exports = class Users {

    constructor(options) {
        this.name = 'users';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(theUser, cb) {
        this.options.url = this.baseUri + theUser;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(userID, params, cb) {
        this.options.url = this.baseUri + userID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(userID, cb) {
        this.options.url = this.baseUri + userID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
}