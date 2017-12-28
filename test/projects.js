let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Projects API', function() {
    describe('List all projects', function() {
        it('should List all projects', function(done) {
            assert.equal(typeof harvest.projects.list, 'function');
            done();
        });
    });

    describe('Retrieve a project', function() {
        it('should Retrieve a project', function(done) {
            assert.equal(typeof harvest.projects.retrieve, 'function');
            done();
        });
    });

    describe('Create a project', function() {
        it('should Create a project', function(done) {
            assert.equal(typeof harvest.projects.create, 'function');
            done();
        });
    });

    describe('Update a project', function() {
        it('should Update a project', function(done) {
            assert.equal(typeof harvest.projects.update, 'function');
            done();
        });
    });

    describe('Delete a project', function() {
        it('should Delete a project', function(done) {
            assert.equal(typeof harvest.projects.delete, 'function');
            done();
        });
    });
});