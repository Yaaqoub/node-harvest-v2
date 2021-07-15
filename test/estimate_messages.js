const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Estimate Messages API', () => {
  describe('List All Estimate Messages', () => {
    it('should implement return all Estimate Messages method', (done) => {
      assert.equal(typeof harvest.estimateMessages.list, 'function');
      done();
    });

    it('should implement ListBy Estimate Messages method', (done) => {
      assert.equal(typeof harvest.estimateMessages.listBy, 'function');
      done();
    });
  });

  describe('Create Estimate Message', () => {
    it('should implement create an Estimate Message method', (done) => {
      assert.equal(typeof harvest.estimateMessages.create, 'function');
      done();
    });
  });

  describe('Delete Estimate Message', () => {
    it('should implement delete an Estimate Message method', (done) => {
      assert.equal(typeof harvest.estimateMessages.delete, 'function');
      done();
    });
  });

  describe('Mark an Estimate', () => {
    it('should implement send a mark event method', (done) => {
      assert.equal(typeof harvest.estimateMessages.mark, 'function');
      done();
    });
  });
});
