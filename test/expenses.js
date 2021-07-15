const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Expenses API', () => {
  describe('List all expenses', () => {
    it('should implement List all expenses method', (done) => {
      assert.equal(typeof harvest.expenses.list, 'function');
      done();
    });

    it('should implement ListBy expenses method', (done) => {
      assert.equal(typeof harvest.expenses.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an expense', () => {
    it('should implement Retrieve an expense method', (done) => {
      assert.equal(typeof harvest.expenses.retrieve, 'function');
      done();
    });
  });

  describe('Create an expense', () => {
    it('should implement Create an expense method', (done) => {
      assert.equal(typeof harvest.expenses.create, 'function');
      done();
    });
  });

  describe('Update an expense', () => {
    it('should implement Update an expense method', (done) => {
      assert.equal(typeof harvest.expenses.update, 'function');
      done();
    });
  });

  describe('Delete an expense', () => {
    it('should implement Delete an expense method', (done) => {
      assert.equal(typeof harvest.expenses.delete, 'function');
      done();
    });
  });
});
