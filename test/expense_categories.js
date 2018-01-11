let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Expense Categories API', function() {
    describe('List all expense categories', function() {
        it('should List all expense categories', function(done) {
            assert.equal(typeof harvest.expenseCategories.list, 'function');
            done();
        });
    });

    describe('Retrieve an expense category', function() {
        it('should Retrieve an expense category', function(done) {
            assert.equal(typeof harvest.expenseCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an expense category', function() {
        it('should Create an expense category', function(done) {
            assert.equal(typeof harvest.expenseCategories.create, 'function');
            done();
        });
    });

    describe('Update an expense category', function() {
        it('should Update an expense category', function(done) {
            assert.equal(typeof harvest.expenseCategories.update, 'function');
            done();
        });
    });

    describe('Delete an expense category', function() {
        it('should Delete an expense category', function(done) {
            assert.equal(typeof harvest.expenseCategories.delete, 'function');
            done();
        });
    });
});