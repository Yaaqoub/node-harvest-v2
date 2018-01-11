let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Project Task Assignments API', function() {
    describe('List all task assignments', function() {
        it('should List all task assignments', function(done) {
            assert.equal(typeof harvest.projectTaskAssignments.list, 'function');
            done();
        });
    });

    describe('Retrieve a task assignment', function() {
        it('should Retrieve a task assignment', function(done) {
            assert.equal(typeof harvest.projectTaskAssignments.retrieve, 'function');
            done();
        });
    });

    describe('Create a task assignment', function() {
        it('should Create a task assignment', function(done) {
            assert.equal(typeof harvest.projectTaskAssignments.create, 'function');
            done();
        });
    });

    describe('Update a task assignment', function() {
        it('should Update a task assignment', function(done) {
            assert.equal(typeof harvest.projectTaskAssignments.update, 'function');
            done();
        });
    });

    describe('Delete a task assignment', function() {
        it('should Delete a task assignment', function(done) {
            assert.equal(typeof harvest.projectTaskAssignments.delete, 'function');
            done();
        });
    });
});