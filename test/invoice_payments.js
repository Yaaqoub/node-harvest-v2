let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Payments API', function() {

    describe('Create Invoice Payments', function() {
        it('should implement create an Invoice Payment method', (done) => {
            assert.equal(typeof harvest.invoicePayments.create, 'function');
            done();
        });
    });

    describe('List All Invoice Payments', function() {
        it('should implement return all Invoice Payments method', (done) => {
            assert.equal(typeof harvest.invoicePayments.list, 'function');
            done();
        });
    });

    describe('Delete Invoice Payments', function() {
        it('should implement Delete an Invoice Payment method', (done) => {
            assert.equal(typeof harvest.invoicePayments.delete, 'function');
            done();
        });
    });
});