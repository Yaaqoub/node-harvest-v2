let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Expense Categories API', function() {
    describe('List all expense categories', function() {
        it('should implement List all expense categories method', (done) => {
            assert.equal(typeof harvest.expenseCategories.list, 'function');
            done();
        });

        it('should implement ListBy expense categories method', (done) => {
            assert.equal(typeof harvest.expenseCategories.listBy, 'function');
            done();
        });
    });

    describe('Retrieve an expense category', function() {
        it('should implement Retrieve an expense category method', (done) => {
            assert.equal(typeof harvest.expenseCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an expense category', function() {
        it('should implement Create an expense category method', (done) => {
            assert.equal(typeof harvest.expenseCategories.create, 'function');
            done();
        });
    });

    describe('Update an expense category', function() {
        it('should implement Update an expense category method', (done) => {
            assert.equal(typeof harvest.expenseCategories.update, 'function');
            done();
        });
    });

    describe('Delete an expense category', function() {
        it('should implement Delete an expense category method', (done) => {
            assert.equal(typeof harvest.expenseCategories.delete, 'function');
            done();
        });
    });
});