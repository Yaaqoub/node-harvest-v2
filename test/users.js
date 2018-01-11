let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Users API', function() {
    describe('List all users', function() {
        it('should List all users', function(done) {
            assert.equal(typeof harvest.users.list, 'function');
            done();
        });
    });

    describe('Retrieve a user', function() {
        it('should Retrieve a user', function(done) {
            assert.equal(typeof harvest.users.retrieve, 'function');
            done();
        });
    });

    describe('Create a user', function() {
        it('should Create a user', function(done) {
            assert.equal(typeof harvest.users.create, 'function');
            done();
        });
    });

    describe('Update a user', function() {
        it('should Update a user', function(done) {
            assert.equal(typeof harvest.users.update, 'function');
            done();
        });
    });

    describe('Delete a user', function() {
        it('should Delete a user', function(done) {
            assert.equal(typeof harvest.users.delete, 'function');
            done();
        });
    });
});