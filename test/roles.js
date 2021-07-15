const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Roles API', () => {
  describe('List all roles', () => {
    it('should implement List all roles method', (done) => {
      assert.equal(typeof harvest.roles.list, 'function');
      done();
    });

    it('should implement ListBy roles method', (done) => {
      assert.equal(typeof harvest.roles.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a role', () => {
    it('should implement Retrieve a role method', (done) => {
      assert.equal(typeof harvest.roles.retrieve, 'function');
      done();
    });
  });

  describe('Create a role', () => {
    it('should implement Create a role method', (done) => {
      assert.equal(typeof harvest.roles.create, 'function');
      done();
    });
  });

  describe('Update a role', () => {
    it('should implement Update a role method', (done) => {
      assert.equal(typeof harvest.roles.update, 'function');
      done();
    });
  });

  describe('Delete a role', () => {
    it('should implement Delete a role method', (done) => {
      assert.equal(typeof harvest.roles.delete, 'function');
      done();
    });
  });
});
