let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Time Entries API', function() {
    describe('List all time entries', function() {
        it('should List all time entries', function(done) {
            assert.equal(typeof harvest.timeEntries.list, 'function');
            done();
        });
    });

    describe('Retrieve a time entry', function() {
        it('should Retrieve a time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.retrieve, 'function');
            done();
        });
    });

    describe('Create a time entry', function() {
        it('should Create a time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.create, 'function');
            done();
        });
    });

    describe('Update a time entry', function() {
        it('should Update a time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.update, 'function');
            done();
        });
    });

    describe('Delete a time entry', function() {
        it('should Delete a time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.delete, 'function');
            done();
        });
    });

    describe('Restart a stopped time entry', function() {
        it('should Restart a stopped time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.restart, 'function');
            done();
        });
    });

    describe('Stop a running time entry', function() {
        it('should Stop a running time entry', function(done) {
            assert.equal(typeof harvest.timeEntries.stop, 'function');
            done();
        });
    });
});