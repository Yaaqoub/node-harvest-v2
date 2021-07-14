const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Project Task Assignments API', () => {
  describe('List all task assignments', () => {
    it('should implement List all task assignments method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.list, 'function');
      done();
    });

    it('should implement ListBy task assignments method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.listBy, 'function');
      done();
    });
  });

  describe('Retrieve a task assignment', () => {
    it('should implement Retrieve a task assignment method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.retrieve, 'function');
      done();
    });
  });

  describe('Create a task assignment', () => {
    it('should implement Create a task assignment method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.create, 'function');
      done();
    });
  });

  describe('Update a task assignment', () => {
    it('should implement Update a task assignment method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.update, 'function');
      done();
    });
  });

  describe('Delete a task assignment', () => {
    it('should implement Delete a task assignment method', (done) => {
      assert.equal(typeof harvest.projectTaskAssignments.delete, 'function');
      done();
    });
  });
});
