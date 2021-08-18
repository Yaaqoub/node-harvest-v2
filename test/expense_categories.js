const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Expense Categories API', () => {
  describe('List all expense categories', () => {
    it('should implement List all expense categories method', (done) => {
      assert.equal(typeof harvest.expenseCategories.list, 'function');
      done();
    });

    it('should implement ListBy expense categories method', (done) => {
      assert.equal(typeof harvest.expenseCategories.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an expense category', () => {
    it('should implement Retrieve an expense category method', (done) => {
      assert.equal(typeof harvest.expenseCategories.retrieve, 'function');
      done();
    });
  });

  describe('Create an expense category', () => {
    it('should implement Create an expense category method', (done) => {
      assert.equal(typeof harvest.expenseCategories.create, 'function');
      done();
    });
  });

  describe('Update an expense category', () => {
    it('should implement Update an expense category method', (done) => {
      assert.equal(typeof harvest.expenseCategories.update, 'function');
      done();
    });
  });

  describe('Delete an expense category', () => {
    it('should implement Delete an expense category method', (done) => {
      assert.equal(typeof harvest.expenseCategories.delete, 'function');
      done();
    });
  });
});
