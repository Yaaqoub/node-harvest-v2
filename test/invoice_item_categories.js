let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Item Categories API', function() {
    describe('Get All Invoice Item Categories', function() {
        it('should return all Invoice Item Categories', function(done) {
            harvest.invoiceItemCategories.list(function(error, response, invoice_item_categories) {
                //assert(!error);
                //assert(Array.isArray(invoice_item_categories));
                //assert.equal(typeof invoice_item_categories[0], 'object');
                done();
            });
        });
    });
});