const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Users API', () => {
  describe('List all users', () => {
    it('should implement List all users method', (done) => {
      assert.equal(typeof harvest.users.list, 'function');
      done();
    });

    it('should implement ListBy users method', (done) => {
      assert.equal(typeof harvest.users.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a user', () => {
    it('should implement Retrieve a user method', (done) => {
      assert.equal(typeof harvest.users.retrieve, 'function');
      done();
    });
  });

  describe('Create a user', () => {
    it('should implement Create a user method', (done) => {
      assert.equal(typeof harvest.users.create, 'function');
      done();
    });
  });

  describe('Update a user', () => {
    it('should implement Update a user method', (done) => {
      assert.equal(typeof harvest.users.update, 'function');
      done();
    });
  });

  describe('Delete a user', () => {
    it('should implement Delete a user method', (done) => {
      assert.equal(typeof harvest.users.delete, 'function');
      done();
    });
  });
});
