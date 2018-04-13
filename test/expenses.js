let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Expenses API', function() {
    describe('List all expenses', function() {
        it('should implement List all expenses method', (done) => {
            assert.equal(typeof harvest.expenses.list, 'function');
            done();
        });
    });

    describe('Retrieve an expense', function() {
        it('should implement Retrieve an expense method', (done) => {
            assert.equal(typeof harvest.expenses.retrieve, 'function');
            done();
        });
    });

    describe('Create an expense', function() {
        it('should implement Create an expense method', (done) => {
            assert.equal(typeof harvest.expenses.create, 'function');
            done();
        });
    });

    describe('Update an expense', function() {
        it('should implement Update an expense method', (done) => {
            assert.equal(typeof harvest.expenses.update, 'function');
            done();
        });
    });

    describe('Delete an expense', function() {
        it('should implement Delete an expense method', (done) => {
            assert.equal(typeof harvest.expenses.delete, 'function');
            done();
        });
    });
});