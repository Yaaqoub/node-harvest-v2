let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Company API', function() {
    describe('Retrieve a company', function() {
        it('should Retrieve a company', function(done) {
            assert.equal(typeof harvest.company.retrieve, 'function');
            done();
        });
    });
});