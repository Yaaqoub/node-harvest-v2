const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Invoice Item Categories API', () => {
  describe('List All Invoice Item Categories', () => {
    it('should implement return all Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.list, 'function');
      done();
    });

    it('should implement ListBy Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an Invoice Item Categories', () => {
    it('should implement retrieve an Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.retrieve, 'function');
      done();
    });
  });

  describe('Create an Invoice Item Categories', () => {
    it('should implement create an Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.create, 'function');
      done();
    });
  });

  describe('Update an Invoice Item Categories', () => {
    it('should implement update an Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.update, 'function');
      done();
    });
  });

  describe('Delete an Invoice Item Categories', () => {
    it('should implement delete an Invoice Item Categories method', (done) => {
      assert.equal(typeof harvest.invoiceItemCategories.delete, 'function');
      done();
    });
  });
});
