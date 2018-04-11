let request = require('request');

module.exports = class Request {
    /**
     *
     * @param options
     * @param cb
     */
    constructor(options, cb) {
        request(options, cb);
    }
};