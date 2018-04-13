let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Messages API', function() {
    describe('List All Estimate Messages', function() {
        it('should implement return all Estimate Messages method', (done) => {
            assert.equal(typeof harvest.estimateMessages.list, 'function');
            done();
        });
    });

    describe('Create Estimate Message', function() {
        it('should implement create an Estimate Message method', (done) => {
            assert.equal(typeof harvest.estimateMessages.create, 'function');
            done();
        });
    });

    describe('Delete Estimate Message', function() {
        it('should implement delete an Estimate Message method', (done) => {
            assert.equal(typeof harvest.estimateMessages.delete, 'function');
            done();
        });
    });

    describe('Mark an Estimate', function() {
        it('should implement send a mark event method', (done) => {
            assert.equal(typeof harvest.estimateMessages.mark, 'function');
            done();
        });
    });
});