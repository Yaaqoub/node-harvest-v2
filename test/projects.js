let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Projects API', function() {
    describe('List all projects', function() {
        it('should implement List all projects method', (done) => {
            assert.equal(typeof harvest.projects.list, 'function');
            done();
        });
    });

    describe('Retrieve a project', function() {
        it('should implement Retrieve a project method', (done) => {
            assert.equal(typeof harvest.projects.retrieve, 'function');
            done();
        });
    });

    describe('Create a project', function() {
        it('should implement Create a project method', (done) => {
            assert.equal(typeof harvest.projects.create, 'function');
            done();
        });
    });

    describe('Update a project', function() {
        it('should implement Update a project method', (done) => {
            assert.equal(typeof harvest.projects.update, 'function');
            done();
        });
    });

    describe('Delete a project', function() {
        it('should implement Delete a project method', (done) => {
            assert.equal(typeof harvest.projects.delete, 'function');
            done();
        });
    });
});