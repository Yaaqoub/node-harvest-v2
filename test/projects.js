const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Projects API', () => {
  describe('List all projects', () => {
    it('should implement List all projects method', (done) => {
      assert.equal(typeof harvest.projects.list, 'function');
      done();
    });

    it('should implement ListBy projects method', (done) => {
      assert.equal(typeof harvest.projects.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a project', () => {
    it('should implement Retrieve a project method', (done) => {
      assert.equal(typeof harvest.projects.retrieve, 'function');
      done();
    });
  });

  describe('Create a project', () => {
    it('should implement Create a project method', (done) => {
      assert.equal(typeof harvest.projects.create, 'function');
      done();
    });
  });

  describe('Update a project', () => {
    it('should implement Update a project method', (done) => {
      assert.equal(typeof harvest.projects.update, 'function');
      done();
    });
  });

  describe('Delete a project', () => {
    it('should implement Delete a project method', (done) => {
      assert.equal(typeof harvest.projects.delete, 'function');
      done();
    });
  });
});
