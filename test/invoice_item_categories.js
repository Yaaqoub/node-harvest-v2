let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Item Categories API', function() {
    describe('List All Invoice Item Categories', function() {
        it('should implement return all Invoice Item Categories method', (done) => {
            assert.equal(typeof harvest.invoiceItemCategories.list, 'function');
            done();
        });
    });

    describe('Retrieve an Invoice Item Categories', function() {
        it('should implement retrieve an Invoice Item Categories method', (done) => {
            assert.equal(typeof harvest.invoiceItemCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an Invoice Item Categories', function() {
        it('should implement create an Invoice Item Categories method', (done) => {
            assert.equal(typeof harvest.invoiceItemCategories.create, 'function');
            done();
        });
    });

    describe('Update an Invoice Item Categories', function() {
        it('should implement update an Invoice Item Categories method', (done) => {
            assert.equal(typeof harvest.invoiceItemCategories.update, 'function');
            done();
        });
    });

    describe('Delete an Invoice Item Categories', function() {
        it('should implement delete an Invoice Item Categories method', (done) => {
            assert.equal(typeof harvest.invoiceItemCategories.delete, 'function');
            done();
        });
    });
});