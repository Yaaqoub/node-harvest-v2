let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null,
    INVOICE_ID = null;

describe('Invoice Messages API', function() {

    before(async() => {
        /**
         * Create New Client
         */
        factory.cleanHarvestOptions();
        const client = await harvest.clients.create({
            'name': CLIENT_NAME,
            'currency': 'EUR'
        });

        CLIENT_ID = factory.getID(client);

        /**
         * Create New Invoice
         */
        factory.cleanHarvestOptions();
        assert(CLIENT_ID);
        const invoice = await harvest.invoices.create({
            'client_id': CLIENT_ID,
            'subject': 'Invoice subject example'
        });

        INVOICE_ID = factory.getID(invoice);
    });

    after(async() => {
        /**
         * Delete an invoice
         */
        factory.cleanHarvestOptions();
        assert(INVOICE_ID);
        await harvest.invoices.delete(INVOICE_ID);

        /**
         * Delete a Client
         */
        factory.cleanHarvestOptions();
        assert(CLIENT_ID);
        await harvest.clients.delete(CLIENT_ID);
    });

    describe('Create Invoice Message', function() {
        it('should implement create an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.create, 'function');
            done();
        });
    });

    describe('List All Invoice Messages', function() {
        it('should implement return all Invoice Messages method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.list, 'function');
            done();
        });

        it('should List all Invoice Messages', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            const invoiceMessages = await harvest.invoiceMessages.list(INVOICE_ID);
            assert(invoiceMessages);
        });
    });

    describe('Mark an Invoice', function() {
        it('should implement send a mark event method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.mark, 'function');
            done();
        });

        it('should Mark an Invoice', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            const markedInvoice = await harvest.invoiceMessages.mark(INVOICE_ID, {
                'event_type': 'send'
            });
            assert(markedInvoice);
        });
    });

    describe('Delete Invoice Message', function() {
        it('should implement delete an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.delete, 'function');
            done();
        });
    });
});