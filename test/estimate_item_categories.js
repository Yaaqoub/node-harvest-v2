let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Item Categories API', function() {
    describe('List All Estimate Item Categories', function() {
        it('should implement return all Estimate Item Categories method', (done) => {
            assert.equal(typeof harvest.estimateItemCategories.list, 'function');
            done();
        });
    });

    describe('Retrieve an Estimate Item Categories', function() {
        it('should implement Retrieve an Estimate Item Categories method', (done) => {
            assert.equal(typeof harvest.estimateItemCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an Estimate Item Categories', function() {
        it('should implement Create an Estimate Item Categories method', (done) => {
            assert.equal(typeof harvest.estimateItemCategories.create, 'function');
            done();
        });
    });

    describe('Update an Estimate Item Categories', function() {
        it('should implement Update an Estimate Item Categories method', (done) => {
            assert.equal(typeof harvest.estimateItemCategories.update, 'function');
            done();
        });
    });

    describe('Delete an Estimate Item Categories', function() {
        it('should implement Delete an Estimate Item Categories method', (done) => {
            assert.equal(typeof harvest.estimateItemCategories.delete, 'function');
            done();
        });
    });
});