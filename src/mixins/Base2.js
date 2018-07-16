let request = require('request-promise');

const base2 = {

    list(id, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;
        this.options.method = 'GET';
        this.options.body = '';
        this.options.json = true;

        return request(this.options, cb);
    },

    retrieve(id, otherId, cb) {
        this.options.url = this.baseUri + id + '/' + this.name + '/' + otherId;
        this.options.method = 'GET';
        this.options.body = '';
        this.options.json = true;

        return request(this.options, cb);
    },

    create(id, params, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);
        this.options.json = false;

        return request(this.options, cb);
    },

    update(id, otherId, params, cb) {
        this.options.url = this.baseUri + id + '/' + this.name + '/' + otherId;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);
        this.options.json = false;

        return request(this.options, cb);
    },

    delete(id, otherId, cb) {
        this.options.url = this.baseUri + id + '/' + this.name + '/' + otherId;
        this.options.method = 'DELETE';
        this.options.body = '';
        this.options.json = false;

        return request(this.options, cb);
    }
};

module.exports = base2;