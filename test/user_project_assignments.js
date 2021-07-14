const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('User Project Assignments API', () => {
  describe('List all User Project Assignments', () => {
    it('should implement List all User Project Assignments method', (done) => {
      assert.equal(typeof harvest.userProjectAssignments.list, 'function');
      done();
    });

    it('should implement ListBy User Project Assignments method', (done) => {
      assert.equal(typeof harvest.userProjectAssignments.listBy, 'function');
      done();
    });
  });
});
