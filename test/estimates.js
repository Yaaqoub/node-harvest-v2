let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimates API', function() {
    describe('List All Estimates', function() {
        it('should return all Estimates', function(done) {
            assert.equal(typeof harvest.estimates.list, 'function');
            done();
        });
    });

    describe('Retrieve an Estimate', function() {
        it('should return an Estimate', function(done) {
            assert.equal(typeof harvest.estimates.retrieve, 'function');
            done();
        });
    });

    describe('Create an Estimate', function() {
        it('should Create an Estimate', function(done) {
            assert.equal(typeof harvest.estimates.create, 'function');
            done();
        });
    });

    describe('Update an Estimate', function() {
        it('should Update an Estimate', function(done) {
            assert.equal(typeof harvest.estimates.update, 'function');
            done();
        });
    });

    describe('Delete an Estimate', function() {
        it('should Delete an Estimate', function(done) {
            assert.equal(typeof harvest.estimates.delete, 'function');
            done();
        });
    });
});