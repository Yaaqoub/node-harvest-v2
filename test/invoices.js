const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null;
let INVOICE_ID = null;

describe('Invoices API', () => {
  before(async () => {
    const client = await harvest.clients.create({
      name: CLIENT_NAME,
      currency: 'EUR',
    });

    CLIENT_ID = factory.getID(client);
  });

  after(async () => {
    assert(CLIENT_ID);
    await harvest.clients.delete(CLIENT_ID);
  });

  describe('Create an invoice', () => {
    it('should implement Create an invoice method', (done) => {
      assert.equal(typeof harvest.invoices.create, 'function');
      done();
    });

    it('should Create an invoice', async () => {
      const newInvoice = await harvest.invoices.create({
        client_id: CLIENT_ID,
        subject: 'Invoice subject example',
      });

      INVOICE_ID = factory.getID(newInvoice);
      assert.equal(typeof INVOICE_ID, 'number', 'The response body should contain a id');
    });
  });

  describe('List All Invoices', () => {
    it('should implement return all Invoices method', (done) => {
      assert.equal(typeof harvest.invoices.list, 'function');
      done();
    });

    it('should implement ListBy Invoices method', (done) => {
      assert.equal(typeof harvest.invoices.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an invoice', () => {
    it('should implement Retrieve an invoice method', (done) => {
      assert.equal(typeof harvest.invoices.retrieve, 'function');
      done();
    });
  });

  describe('Update an invoice', () => {
    it('should implement Update an invoice method', (done) => {
      assert.equal(typeof harvest.invoices.update, 'function');
      done();
    });
  });

  describe('Delete an invoice', () => {
    it('should implement Delete an invoice method', (done) => {
      assert.equal(typeof harvest.invoices.delete, 'function');
      done();
    });

    it('should Delete an invoice', async () => {
      assert(INVOICE_ID);
      await harvest.invoices.delete(INVOICE_ID);
    });
  });
});
