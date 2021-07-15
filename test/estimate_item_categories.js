const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Estimate Item Categories API', () => {
  describe('List All Estimate Item Categories', () => {
    it('should implement return all Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.list, 'function');
      done();
    });

    it('should implement ListBy Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an Estimate Item Categories', () => {
    it('should implement Retrieve an Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.retrieve, 'function');
      done();
    });
  });

  describe('Create an Estimate Item Categories', () => {
    it('should implement Create an Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.create, 'function');
      done();
    });
  });

  describe('Update an Estimate Item Categories', () => {
    it('should implement Update an Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.update, 'function');
      done();
    });
  });

  describe('Delete an Estimate Item Categories', () => {
    it('should implement Delete an Estimate Item Categories method', (done) => {
      assert.equal(typeof harvest.estimateItemCategories.delete, 'function');
      done();
    });
  });
});
