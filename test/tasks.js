let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Tasks API', function() {
    describe('List all tasks', function() {
        it('should List all tasks', function(done) {
            assert.equal(typeof harvest.tasks.list, 'function');
            done();
        });
    });

    describe('Retrieve a tasks', function() {
        it('should Retrieve a tasks', function(done) {
            assert.equal(typeof harvest.tasks.retrieve, 'function');
            done();
        });
    });

    describe('Create a task', function() {
        it('should Create a task', function(done) {
            assert.equal(typeof harvest.tasks.create, 'function');
            done();
        });
    });

    describe('Update a task', function() {
        it('should Update a task', function(done) {
            assert.equal(typeof harvest.tasks.update, 'function');
            done();
        });
    });

    describe('Delete a task', function() {
        it('should Delete a task', function(done) {
            assert.equal(typeof harvest.tasks.delete, 'function');
            done();
        });
    });
});