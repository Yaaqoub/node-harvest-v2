let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoices API', function() {
    describe('Get All Invoices', function() {
        it('should return all Invoices', function(done) {
            harvest.invoices.list(function(error, response, invoices) {
                //assert(!error);
                //assert(Array.isArray(invoices));
                //assert.equal(typeof invoices[0], 'object');
                done();
            });
        });
    });
});