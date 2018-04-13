let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Roles API', function() {
    describe('List all roles', function() {
        it('should implement List all roles method', (done) => {
            assert.equal(typeof harvest.roles.list, 'function');
            done();
        });
    });

    describe('Retrieve a role', function() {
        it('should implement Retrieve a role method', (done) => {
            assert.equal(typeof harvest.roles.retrieve, 'function');
            done();
        });
    });

    describe('Create a role', function() {
        it('should implement Create a role method', (done) => {
            assert.equal(typeof harvest.roles.create, 'function');
            done();
        });
    });

    describe('Update a role', function() {
        it('should implement Update a role method', (done) => {
            assert.equal(typeof harvest.roles.update, 'function');
            done();
        });
    });

    describe('Delete a role', function() {
        it('should implement Delete a role method', (done) => {
            assert.equal(typeof harvest.roles.delete, 'function');
            done();
        });
    });
});