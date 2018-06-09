let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Project Task Assignments API', function() {
    describe('List all task assignments', function() {
        it('should implement List all task assignments method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.list, 'function');
            done();
        });

        it('should implement ListBy task assignments method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.listBy, 'function');
            done();
        });
    });

    describe('Retrieve a task assignment', function() {
        it('should implement Retrieve a task assignment method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.retrieve, 'function');
            done();
        });
    });

    describe('Create a task assignment', function() {
        it('should implement Create a task assignment method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.create, 'function');
            done();
        });
    });

    describe('Update a task assignment', function() {
        it('should implement Update a task assignment method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.update, 'function');
            done();
        });
    });

    describe('Delete a task assignment', function() {
        it('should implement Delete a task assignment method', (done) => {
            assert.equal(typeof harvest.projectTaskAssignments.delete, 'function');
            done();
        });
    });
});