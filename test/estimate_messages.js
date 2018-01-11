let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Messages API', function() {
    describe('List All Estimate Messages', function() {
        it('should return all Estimate Messages', function(done) {
            assert.equal(typeof harvest.estimateMessages.list, 'function');
            done();
        });
    });

    describe('Create Estimate Message', function() {
        it('should create an Estimate Message', function(done) {
            assert.equal(typeof harvest.estimateMessages.create, 'function');
            done();
        });
    });

    describe('Delete Estimate Message', function() {
        it('should delete an Estimate Message', function(done) {
            assert.equal(typeof harvest.estimateMessages.delete, 'function');
            done();
        });
    });

    describe('Mark an Estimate', function() {
        it('should send a mark event', function(done) {
            assert.equal(typeof harvest.estimateMessages.mark, 'function');
            done();
        });
    });
});