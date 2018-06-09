let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('User Project Assignments API', function() {
    describe('List all User Project Assignments', function() {
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