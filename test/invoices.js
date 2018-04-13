let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoices API', function() {
    describe('List All Invoices', function() {
        it('should implement return all Invoices method', (done) => {
            assert.equal(typeof harvest.invoices.list, 'function');
            done();
        });
    });

    describe('Retrieve an invoice', function() {
        it('should implement Retrieve an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.retrieve, 'function');
            done();
        });
    });

    describe('Create an invoice', function() {
        it('should implement Create an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.create, 'function');
            done();
        });
    });

    describe('Update an invoice', function() {
        it('should implement Update an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.update, 'function');
            done();
        });
    });

    describe('Delete an invoice', function() {
        it('should implement Delete an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.delete, 'function');
            done();
        });
    });
});