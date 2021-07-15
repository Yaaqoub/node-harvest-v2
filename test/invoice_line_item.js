const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Invoice Line Item API', () => {
  describe('Create an Invoice Line Item', () => {
    it('should implement create an Invoice Line Item method', (done) => {
      assert.equal(typeof harvest.invoiceLineItem.create, 'function');
      done();
    });
  });

  describe('Update an Invoice Line Item', () => {
    it('should implement Update an Invoice Line Item method', (done) => {
      assert.equal(typeof harvest.invoiceLineItem.update, 'function');
      done();
    });
  });

  describe('Delete an Invoice Line Item', () => {
    it('should implement Delete an Invoice Line Item method', (done) => {
      assert.equal(typeof harvest.invoiceLineItem.delete, 'function');
      done();
    });
  });
});
