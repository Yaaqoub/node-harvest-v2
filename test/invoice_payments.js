let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Payments API', function() {
    describe('List All Invoice Payments', function() {
        it('should return all Invoice Payments', function(done) {
            assert.equal(typeof harvest.invoicePayments.list, 'function');
            done();
        });
    });

    describe('Create Invoice Payments', function() {
        it('should create an Invoice Payment', function(done) {
            assert.equal(typeof harvest.invoicePayments.create, 'function');
            done();
        });
    });

    describe('Delete Invoice Payments', function() {
        it('should Delete an Invoice Payment', function(done) {
            assert.equal(typeof harvest.invoicePayments.delete, 'function');
            done();
        });
    });
});