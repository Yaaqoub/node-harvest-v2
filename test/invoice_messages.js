const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null;
let INVOICE_ID = null;

describe('Invoice Messages API', () => {
  before(async () => {
    /**
         * Create New Client
         */
    const client = await harvest.clients.create({
      name: CLIENT_NAME,
      currency: 'EUR',
    });

    CLIENT_ID = factory.getID(client);

    /**
         * Create New Invoice
         */
    assert(CLIENT_ID);
    const invoice = await harvest.invoices.create({
      client_id: CLIENT_ID,
      subject: 'Invoice subject example',
    });

    INVOICE_ID = factory.getID(invoice);
  });

  after(async () => {
    /**
         * Delete an invoice
         */
    assert(INVOICE_ID);
    await harvest.invoices.delete(INVOICE_ID);

    /**
         * Delete a Client
         */
    assert(CLIENT_ID);
    await harvest.clients.delete(CLIENT_ID);
  });

  describe('Create Invoice Message', () => {
    it('should implement create an Invoice Message method', (done) => {
      assert.equal(typeof harvest.invoiceMessages.create, 'function');
      done();
    });
  });

  describe('List All Invoice Messages', () => {
    it('should implement return all Invoice Messages method', (done) => {
      assert.equal(typeof harvest.invoiceMessages.list, 'function');
      done();
    });

    it('should List all Invoice Messages', async () => {
      assert(INVOICE_ID);
      const invoiceMessages = await harvest.invoiceMessages.list(INVOICE_ID);
      assert(invoiceMessages);
    });

    it('should implement ListBy Invoice Messages method', (done) => {
      assert.equal(typeof harvest.invoiceMessages.listBy, 'function');
      done();
    });
  });

  describe('Mark an Invoice', () => {
    it('should implement send a mark event method', (done) => {
      assert.equal(typeof harvest.invoiceMessages.mark, 'function');
      done();
    });

    it('should Mark an Invoice', async () => {
      assert(INVOICE_ID);
      const markedInvoice = await harvest.invoiceMessages.mark(INVOICE_ID, {
        event_type: 'send',
      });
      assert(markedInvoice);
    });
  });

  describe('Delete Invoice Message', () => {
    it('should implement delete an Invoice Message method', (done) => {
      assert.equal(typeof harvest.invoiceMessages.delete, 'function');
      done();
    });
  });
});
