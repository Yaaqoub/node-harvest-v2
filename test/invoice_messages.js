let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Messages API', function() {
    describe('Get All Invoice Messages', function() {
        it('should return all Invoice Messages', function(done) {
            harvest.invoiceMessages.list(14729039, function(error, response, invoice_messages) {
                //assert(!error);
                //assert(Array.isArray(invoice_messages));
                //assert.equal(typeof invoice_messages[0], 'object');
                done();
            });
        });
    });
});