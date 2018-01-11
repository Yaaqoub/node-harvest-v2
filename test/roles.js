let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Roles API', function() {
    describe('List all roles', function() {
        it('should List all roles', function(done) {
            assert.equal(typeof harvest.roles.list, 'function');
            done();
        });
    });

    describe('Retrieve a role', function() {
        it('should Retrieve a role', function(done) {
            assert.equal(typeof harvest.roles.retrieve, 'function');
            done();
        });
    });

    describe('Create a role', function() {
        it('should Create a role', function(done) {
            assert.equal(typeof harvest.roles.create, 'function');
            done();
        });
    });

    describe('Update a role', function() {
        it('should Update a role', function(done) {
            assert.equal(typeof harvest.roles.update, 'function');
            done();
        });
    });

    describe('Delete a role', function() {
        it('should Delete a role', function(done) {
            assert.equal(typeof harvest.roles.delete, 'function');
            done();
        });
    });
});