let request = require('request-promise');

const base = {

    list(cb) {
        this.options.url = this.baseUri;
        this.options.method = 'GET';
        this.options.body = '';
        return request(this.options, cb);
    },

    retrieve(id, cb) {
        if (id) {
            this.options.url = this.baseUri + '/' + id;
        } else {
            this.options.url = this.baseUri;
        }
        this.options.method = 'GET';
        this.options.body = '';

        this.options.method = 'GET';
        this.options.body = undefined;
        return request(this.options, cb);
    },

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);
        return request(this.options, cb);
    },

    update(id, params, cb) {
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);
        return request(this.options, cb);
    },

    delete(id, cb) {
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'DELETE';
        this.options.body = '';
        return request(this.options, cb);
    }
};

module.exports = base;
