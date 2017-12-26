let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimates API', function() {
    describe('List All Estimates', function() {
        it('should return all Estimates', function(done) {
            harvest.estimates.list(function(error, response, estimates) {
                //assert(!error);
                //assert(Array.isArray(estimates));
                //assert.equal(typeof estimates[0], 'object');
                done();
            });
        });
    });

    describe('Retrieve an Estimate', function() {
        it('should return an Estimates', function(done) {
            harvest.estimates.retrieve(1593381, function(error, response, estimates) {
                //assert(!error);
                //assert(Array.isArray(estimates));
                //assert.equal(typeof estimates[0], 'object');
                done();
            });
        });
    });
});