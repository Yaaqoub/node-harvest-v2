let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Item Categories API', function() {
    describe('Get All Estimate Item Categories', function() {
        it('should return all Estimate Item Categories', function(done) {
            harvest.estimateItemCategories.list(function(error, response, estimateItemCategories) {
                //assert(!error);
                //assert(Array.isArray(estimateItemCategories));
                //assert.equal(typeof estimateItemCategories[0], 'object');
                done();
            });
        });
    });
});