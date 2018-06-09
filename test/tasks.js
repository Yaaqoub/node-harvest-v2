let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Tasks API', function() {
    describe('List all tasks', function() {
        it('should implement List all tasks method', (done) => {
            assert.equal(typeof harvest.tasks.list, 'function');
            done();
        });

        it('should implement ListBy tasks method', (done) => {
            assert.equal(typeof harvest.tasks.listBy, 'function');
            done();
        });
    });

    describe('Retrieve a tasks', function() {
        it('should implement Retrieve a tasks method', (done) => {
            assert.equal(typeof harvest.tasks.retrieve, 'function');
            done();
        });
    });

    describe('Create a task', function() {
        it('should implement Create a task method', (done) => {
            assert.equal(typeof harvest.tasks.create, 'function');
            done();
        });
    });

    describe('Update a task', function() {
        it('should implement Update a task method', (done) => {
            assert.equal(typeof harvest.tasks.update, 'function');
            done();
        });
    });

    describe('Delete a task', function() {
        it('should implement Delete a task method', (done) => {
            assert.equal(typeof harvest.tasks.delete, 'function');
            done();
        });
    });
});