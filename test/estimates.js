let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimates API', function() {
    describe('Get All Estimates', function() {
        it('should return all Estimates', function(done) {
            harvest.estimates.list();
            done();
        });
    });
});