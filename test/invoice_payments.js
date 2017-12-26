let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Payments API', function() {
    describe('Get All Invoice Payments', function() {
        it('should return all Invoice Payments', function(done) {
            harvest.invoicePayments.list(14729039, function(error, response, invoice_payments) {
                //assert(!error);
                //assert(Array.isArray(invoice_payments));
                //assert.equal(typeof invoice_payments[0], 'object');
                done();
            });
        });
    });
});