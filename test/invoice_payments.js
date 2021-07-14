const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Invoice Payments API', () => {
  describe('Create Invoice Payments', () => {
    it('should implement create an Invoice Payment method', (done) => {
      assert.equal(typeof harvest.invoicePayments.create, 'function');
      done();
    });
  });

  describe('List All Invoice Payments', () => {
    it('should implement return all Invoice Payments method', (done) => {
      assert.equal(typeof harvest.invoicePayments.list, 'function');
      done();
    });

    it('should implement ListBy Invoice Payments method', (done) => {
      assert.equal(typeof harvest.invoicePayments.listBy, 'function');
      done();
    });
  });

  describe('Delete Invoice Payments', () => {
    it('should implement Delete an Invoice Payment method', (done) => {
      assert.equal(typeof harvest.invoicePayments.delete, 'function');
      done();
    });
  });
});
