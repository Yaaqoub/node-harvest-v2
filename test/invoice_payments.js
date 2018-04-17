let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null,
    INVOICE_ID = null,
    INVOICE_PAYMENTS_ID = null;


describe('Invoice Payments API', function() {

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
    });

    after(async() => {
        /**
         * Delete Invoice
         */
        factory.cleanHarvestOptions();
        assert(INVOICE_ID);
        await harvest.invoices.delete(INVOICE_ID);

        /**
         * Delete Client
         */
        factory.cleanHarvestOptions();
        assert(CLIENT_ID);
        await harvest.clients.delete(CLIENT_ID);
    });

    describe('Create Invoice Payments', function() {
        it('should implement create an Invoice Payment method', (done) => {
            assert.equal(typeof harvest.invoicePayments.create, 'function');
            done();
        });

        it('should Create an Invoice Payment', async() => {
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
             * Create New Payment
             */
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            const newInvoicePayment = await harvest.invoicePayments.create(INVOICE_ID, {
                "amount":"1575.86",
                "paid_at":"2018-04-17T12:33:18Z",
                "notes":"Paid by phone"
            });

            INVOICE_PAYMENTS_ID = factory.getID(newInvoicePayment);
            assert.equal(typeof INVOICE_PAYMENTS_ID, 'number', 'The response body should contain a id');
        });
    });

    describe('List All Invoice Payments', function() {
        it('should implement return all Invoice Payments method', (done) => {
            assert.equal(typeof harvest.invoicePayments.list, 'function');
            done();
        });

        it('should List all Invoice Payments', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            const invoicePayments = await harvest.invoicePayments.list(INVOICE_ID);
            assert(invoicePayments);
        });
    });

    describe('Delete Invoice Payments', function() {
        it('should implement Delete an Invoice Payment method', (done) => {
            assert.equal(typeof harvest.invoicePayments.delete, 'function');
            done();
        });

        it('should Delete an invoice Payments', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            assert(INVOICE_PAYMENTS_ID);
            await harvest.invoicePayments.delete(INVOICE_ID, INVOICE_PAYMENTS_ID);
        });
    });
});