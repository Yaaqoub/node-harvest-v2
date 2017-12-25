let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Request Test', function() {
    describe('Get All Estimates', function() {
        it('should return all Estimates', function(done) {
            harvest.estimatesList();
            done();
        });
    });
});