let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Line Item API', function() {
    describe('Create an Invoice Line Item', function() {
        it('should implement create an Invoice Line Item method', (done) => {
            assert.equal(typeof harvest.invoiceLineItem.create, 'function');
            done();
        });
    });

    describe('Update an Invoice Line Item', function() {
        it('should implement Update an Invoice Line Item method', (done) => {
            assert.equal(typeof harvest.invoiceLineItem.update, 'function');
            done();
        });
    });

    describe('Delete an Invoice Line Item', function() {
        it('should implement Delete an Invoice Line Item method', (done) => {
            assert.equal(typeof harvest.invoiceLineItem.delete, 'function');
            done();
        });
    });
});