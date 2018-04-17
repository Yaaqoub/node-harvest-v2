let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');
const CLIENT_CONTACT_EMAIL = 'semlali.yaaqoub@gmail.com';
const CLIENT_CONTACT_NAME = factory.generateRandomNames('CLIENT_CONTACT');

let CLIENT_ID = null,
    CONTACT_ID = null,
    INVOICE_ID = null,
    INVOICE_MESSAGE_ID = null;

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
         * Create New Client Contact
         */
        factory.cleanHarvestOptions();
        const clientContact = await harvest.clientContacts.create({
            'client_id': CLIENT_ID,
            'first_name': CLIENT_CONTACT_NAME,
            'email': CLIENT_CONTACT_EMAIL
        });

        CONTACT_ID = factory.getID(clientContact);
    });

    after(async() => {
        factory.cleanHarvestOptions();
        assert(CLIENT_ID);
        await harvest.clients.delete(CLIENT_ID);
    });

    describe('Create Invoice Message', function() {
        it('should implement create an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.create, 'function');
            done();
        });

        it('should Create an Invoice Message', async() => {
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

            /**
             * Create New Invoice Message
             */
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            const newInvoiceMessage = await harvest.invoiceMessages.create(INVOICE_ID, {
                'recipients': [{
                    'email': CLIENT_CONTACT_EMAIL
                }]
            });

            INVOICE_MESSAGE_ID = factory.getID(newInvoiceMessage);
            assert.equal(typeof INVOICE_MESSAGE_ID, 'number', 'The response body should contain a id');
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
                'event_type': 'draft'
            });
            assert(markedInvoice);
        });
    });

    describe('Delete Invoice Message', function() {
        it('should implement delete an Invoice Message method', (done) => {
            assert.equal(typeof harvest.invoiceMessages.delete, 'function');
            done();
        });

        it('should Delete an invoice message', async() => {
            /**
             * Delete an invoice message
             */
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            assert(INVOICE_MESSAGE_ID);
            await harvest.invoiceMessages.delete(INVOICE_ID, INVOICE_MESSAGE_ID);

            /**
             * Delete an invoice
             */
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            await harvest.invoices.delete(INVOICE_ID);
        });
    });
});