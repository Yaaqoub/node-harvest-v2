let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Item Categories API', function() {
    describe('List All Estimate Item Categories', function() {
        it('should return all Estimate Item Categories', function(done) {
            assert.equal(typeof harvest.estimateItemCategories.list, 'function');
            done();
        });
    });

    describe('Retrieve an Estimate Item Categories', function() {
        it('should Retrieve an Estimate Item Categories', function(done) {
            assert.equal(typeof harvest.estimateItemCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an Estimate Item Categories', function() {
        it('should Create an Estimate Item Categories', function(done) {
            assert.equal(typeof harvest.estimateItemCategories.create, 'function');
            done();
        });
    });

    describe('Update an Estimate Item Categories', function() {
        it('should Update an Estimate Item Categories', function(done) {
            assert.equal(typeof harvest.estimateItemCategories.update, 'function');
            done();
        });
    });

    describe('Delete an Estimate Item Categories', function() {
        it('should Delete an Estimate Item Categories', function(done) {
            assert.equal(typeof harvest.estimateItemCategories.delete, 'function');
            done();
        });
    });
});