let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Project User Assignments API', function() {
    describe('List all user assignments', function() {
        it('should implement List all user assignments method', (done) => {
            assert.equal(typeof harvest.projectUserAssignments.list, 'function');
            done();
        });
    });

    describe('Retrieve a user assignment', function() {
        it('should implement Retrieve a user assignment method', (done) => {
            assert.equal(typeof harvest.projectUserAssignments.retrieve, 'function');
            done();
        });
    });

    describe('Create a user assignment', function() {
        it('should implement Create a user assignment method', (done) => {
            assert.equal(typeof harvest.projectUserAssignments.create, 'function');
            done();
        });
    });

    describe('Update a user assignment', function() {
        it('should implement Update a user assignment method', (done) => {
            assert.equal(typeof harvest.projectUserAssignments.update, 'function');
            done();
        });
    });

    describe('Delete a user assignment', function() {
        it('should implement Delete a user assignment method', (done) => {
            assert.equal(typeof harvest.projectUserAssignments.delete, 'function');
            done();
        });
    });
});