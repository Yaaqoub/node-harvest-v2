const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Tasks API', () => {
  describe('List all tasks', () => {
    it('should implement List all tasks method', (done) => {
      assert.equal(typeof harvest.tasks.list, 'function');
      done();
    });

    it('should implement ListBy tasks method', (done) => {
      assert.equal(typeof harvest.tasks.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a tasks', () => {
    it('should implement Retrieve a tasks method', (done) => {
      assert.equal(typeof harvest.tasks.retrieve, 'function');
      done();
    });
  });

  describe('Create a task', () => {
    it('should implement Create a task method', (done) => {
      assert.equal(typeof harvest.tasks.create, 'function');
      done();
    });
  });

  describe('Update a task', () => {
    it('should implement Update a task method', (done) => {
      assert.equal(typeof harvest.tasks.update, 'function');
      done();
    });
  });

  describe('Delete a task', () => {
    it('should implement Delete a task method', (done) => {
      assert.equal(typeof harvest.tasks.delete, 'function');
      done();
    });
  });
});
