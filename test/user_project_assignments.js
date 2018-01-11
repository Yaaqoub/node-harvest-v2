let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('User Project Assignments API', function() {
    describe('List all User Project Assignments', function() {
        it('should List all User Project Assignments', function(done) {
            assert.equal(typeof harvest.userProjectAssignments.list, 'function');
            done();
        });
    });
});