let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Item Categories API', function() {
    describe('List All Invoice Item Categories', function() {
        it('should return all Invoice Item Categories', function(done) {
            assert.equal(typeof harvest.invoiceItemCategories.list, 'function');
            done();
        });
    });

    describe('Retrieve an Invoice Item Categories', function() {
        it('should retrieve an Invoice Item Categories', function(done) {
            assert.equal(typeof harvest.invoiceItemCategories.retrieve, 'function');
            done();
        });
    });

    describe('Create an Invoice Item Categories', function() {
        it('should create an Invoice Item Categories', function(done) {
            assert.equal(typeof harvest.invoiceItemCategories.create, 'function');
            done();
        });
    });

    describe('Update an Invoice Item Categories', function() {
        it('should update an Invoice Item Categories', function(done) {
            assert.equal(typeof harvest.invoiceItemCategories.update, 'function');
            done();
        });
    });

    describe('Delete an Invoice Item Categories', function() {
        it('should delete an Invoice Item Categories', function(done) {
            assert.equal(typeof harvest.invoiceItemCategories.delete, 'function');
            done();
        });
    });
});