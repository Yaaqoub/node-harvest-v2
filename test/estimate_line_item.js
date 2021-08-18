const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Estimate Line Item API', () => {
  describe('Create an Estimate Line Item', () => {
    it('should implement create an Estimate Line Item method', (done) => {
      assert.equal(typeof harvest.estimateLineItem.create, 'function');
      done();
    });
  });

  describe('Update an Estimate Line Item', () => {
    it('should implement Update an Estimate Line Item method', (done) => {
      assert.equal(typeof harvest.estimateLineItem.update, 'function');
      done();
    });
  });

  describe('Delete an Estimate Line Item', () => {
    it('should implement Delete an Estimate Line Item method', (done) => {
      assert.equal(typeof harvest.estimateLineItem.delete, 'function');
      done();
    });
  });
});
