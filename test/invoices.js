let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null,
    INVOICE_ID = null;

describe('Invoices API', function() {

    before(async() => {
        factory.cleanHarvestOptions();
        const client = await harvest.clients.create({
            'name': CLIENT_NAME,
            'currency': 'EUR'
        });

        CLIENT_ID = factory.getID(client);
    });

    after(async() => {
        factory.cleanHarvestOptions();
        assert(CLIENT_ID);
        await harvest.clients.delete(CLIENT_ID);
    });

    describe('Create an invoice', function() {
        it('should implement Create an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.create, 'function');
            done();
        });

        it('should Create an invoice', async() => {
            factory.cleanHarvestOptions();
            const newInvoice = await harvest.invoices.create({
                'client_id': CLIENT_ID,
                'subject': 'Invoice subject example'
            });

            INVOICE_ID = factory.getID(newInvoice);
            assert.equal(typeof INVOICE_ID, 'number', 'The response body should contain a id');
        });
    });

    describe('List All Invoices', function() {
        it('should implement return all Invoices method', (done) => {
            assert.equal(typeof harvest.invoices.list, 'function');
            done();
        });

        it('should List all Invoices', async() => {
            factory.cleanHarvestOptions();
            const invoices = await harvest.invoices.list();
            assert(invoices);
        });
    });

    describe('Retrieve an invoice', function() {
        it('should implement Retrieve an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.retrieve, 'function');
            done();
        });

        it('should Retrieve an invoice', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);

            const theInvoice = await harvest.invoices.retrieve(INVOICE_ID);

            assert(theInvoice);
            assert.equal(factory.getID(theInvoice), INVOICE_ID);
        });
    });

    describe('Update an invoice', function() {
        it('should implement Update an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.update, 'function');
            done();
        });

        it('should Update an invoice', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);

            const updatedInvoice = await harvest.invoices.update(INVOICE_ID, {
                subject: 'updated estimate subject example'
            });

            assert(updatedInvoice);
        });
    });

    describe('Delete an invoice', function() {
        it('should implement Delete an invoice method', (done) => {
            assert.equal(typeof harvest.invoices.delete, 'function');
            done();
        });

        it('should Delete an invoice', async() => {
            factory.cleanHarvestOptions();
            assert(INVOICE_ID);
            await harvest.invoices.delete(INVOICE_ID);
        });
    });
});