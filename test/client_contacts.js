let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Clients API', function() {
    describe('List all contacts', function() {
        it('should List all contacts', function(done) {
            assert.equal(typeof harvest.clientContacts.list, 'function');
            done();
        });
    });

    describe('Retrieve a contact', function() {
        it('should Retrieve a contact', function(done) {
            assert.equal(typeof harvest.clientContacts.retrieve, 'function');
            done();
        });
    });

    describe('Create a contact', function() {
        it('should Create a contact', function(done) {
            assert.equal(typeof harvest.clientContacts.create, 'function');
            done();
        });
    });

    describe('Update a contact', function() {
        it('should Update a contact', function(done) {
            assert.equal(typeof harvest.clientContacts.update, 'function');
            done();
        });
    });

    describe('Delete a contact', function() {
        it('should Delete a contact', function(done) {
            assert.equal(typeof harvest.clientContacts.delete, 'function');
            done();
        });
    });
});