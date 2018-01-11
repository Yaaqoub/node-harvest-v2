let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Messages API', function() {
    describe('List All Invoice Messages', function() {
        it('should return all Invoice Messages', function(done) {
            assert.equal(typeof harvest.invoiceMessages.list, 'function');
            done();
        });
    });

    describe('Create Invoice Message', function() {
        it('should create an Invoice Message', function(done) {
            assert.equal(typeof harvest.invoiceMessages.create, 'function');
            done();
        });
    });

    describe('Delete Invoice Message', function() {
        it('should delete an Invoice Message', function(done) {
            assert.equal(typeof harvest.invoiceMessages.delete, 'function');
            done();
        });
    });

    describe('Mark an Invoice', function() {
        it('should send a mark event', function(done) {
            assert.equal(typeof harvest.invoiceMessages.mark, 'function');
            done();
        });
    });
});