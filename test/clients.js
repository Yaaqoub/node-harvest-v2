let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Clients API', function() {
    describe('List all clients', function() {
        it('should List all clients', function(done) {
            assert.equal(typeof harvest.clients.list, 'function');
            done();
        });
    });

    describe('Retrieve a client', function() {
        it('should Retrieve a client', function(done) {
            assert.equal(typeof harvest.clients.retrieve, 'function');
            done();
        });
    });

    describe('Create a client', function() {
        it('should Create a client', function(done) {
            assert.equal(typeof harvest.clients.create, 'function');
            done();
        });
    });

    describe('Update a client', function() {
        it('should Update a client', function(done) {
            assert.equal(typeof harvest.clients.update, 'function');
            done();
        });
    });

    describe('Delete a client', function() {
        it('should Delete a client', function(done) {
            assert.equal(typeof harvest.clients.delete, 'function');
            done();
        });
    });
});