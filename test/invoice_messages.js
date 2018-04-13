let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Invoice Messages API', function() {
    describe('List All Invoice Messages', function() {
        it('should implement return all Invoice Messages method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.list, 'function');
            done();
        });
    });

    describe('Create Invoice Message', function() {
        it('should implement create an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.create, 'function');
            done();
        });
    });

    describe('Delete Invoice Message', function() {
        it('should implement delete an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.delete, 'function');
            done();
        });
    });

    describe('Mark an Invoice', function() {
        it('should implement send a mark event method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.mark, 'function');
            done();
        });
    });
});