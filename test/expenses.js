let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Expenses API', function() {
    describe('List all expenses', function() {
        it('should List all expenses', function(done) {
            assert.equal(typeof harvest.expenses.list, 'function');
            done();
        });
    });

    describe('Retrieve an expense', function() {
        it('should Retrieve an expense', function(done) {
            assert.equal(typeof harvest.expenses.retrieve, 'function');
            done();
        });
    });

    describe('Create an expense', function() {
        it('should Create an expense', function(done) {
            assert.equal(typeof harvest.expenses.create, 'function');
            done();
        });
    });

    describe('Update an expense', function() {
        it('should Update an expense', function(done) {
            assert.equal(typeof harvest.expenses.update, 'function');
            done();
        });
    });

    describe('Delete an expense', function() {
        it('should Delete an expense', function(done) {
            assert.equal(typeof harvest.expenses.delete, 'function');
            done();
        });
    });
});