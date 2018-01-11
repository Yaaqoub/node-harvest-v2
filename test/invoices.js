let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoices API', function() {
    describe('List All Invoices', function() {
        it('should return all Invoices', function(done) {
            assert.equal(typeof harvest.invoices.list, 'function');
            done();
        });
    });

    describe('Retrieve an invoice', function() {
        it('should Retrieve an invoice', function(done) {
            assert.equal(typeof harvest.invoices.retrieve, 'function');
            done();
        });
    });

    describe('Create an invoice', function() {
        it('should Create an invoice', function(done) {
            assert.equal(typeof harvest.invoices.create, 'function');
            done();
        });
    });

    describe('Update an invoice', function() {
        it('should Update an invoice', function(done) {
            assert.equal(typeof harvest.invoices.update, 'function');
            done();
        });
    });

    describe('Delete an invoice', function() {
        it('should Delete an invoice', function(done) {
            assert.equal(typeof harvest.invoices.delete, 'function');
            done();
        });
    });
});