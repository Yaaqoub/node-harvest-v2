let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Project User Assignments API', function() {
    describe('List all user assignments', function() {
        it('should List all user assignments', function(done) {
            assert.equal(typeof harvest.projectUserAssignments.list, 'function');
            done();
        });
    });

    describe('Retrieve a user assignment', function() {
        it('should Retrieve a user assignment', function(done) {
            assert.equal(typeof harvest.projectUserAssignments.retrieve, 'function');
            done();
        });
    });

    describe('Create a user assignment', function() {
        it('should Create a user assignment', function(done) {
            assert.equal(typeof harvest.projectUserAssignments.create, 'function');
            done();
        });
    });

    describe('Update a user assignment', function() {
        it('should Update a user assignment', function(done) {
            assert.equal(typeof harvest.projectUserAssignments.update, 'function');
            done();
        });
    });

    describe('Delete a user assignment', function() {
        it('should Delete a user assignment', function(done) {
            assert.equal(typeof harvest.projectUserAssignments.delete, 'function');
            done();
        });
    });
});