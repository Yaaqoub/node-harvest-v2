let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Line Item API', function() {
    describe('Create an Estimate Line Item', function() {
        it('should create an Estimate Line Item', function(done) {
            assert.equal(typeof harvest.estimateLineItem.create, 'function');
            done();
        });
    });
});