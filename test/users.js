let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Users API', function() {
    describe('List all users', function() {
        it('should implement List all users method', (done) => {
            assert.equal(typeof harvest.users.list, 'function');
            done();
        });
    });

    describe('Retrieve a user', function() {
        it('should implement Retrieve a user method', (done) => {
            assert.equal(typeof harvest.users.retrieve, 'function');
            done();
        });
    });

    describe('Create a user', function() {
        it('should implement Create a user method', (done) => {
            assert.equal(typeof harvest.users.create, 'function');
            done();
        });
    });

    describe('Update a user', function() {
        it('should implement Update a user method', (done) => {
            assert.equal(typeof harvest.users.update, 'function');
            done();
        });
    });

    describe('Delete a user', function() {
        it('should implement Delete a user method', (done) => {
            assert.equal(typeof harvest.users.delete, 'function');
            done();
        });
    });
});