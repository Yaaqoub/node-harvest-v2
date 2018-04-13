let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Time Entries API', function() {
    describe('List a specific time entries', function() {
        it('should implement List a specific time entries method', (done) => {
            assert.equal(typeof harvest.timeEntries.list, 'function');
            done();
        });
    });

    describe('List all time entries', function() {
        it('should implement List all time entries method', (done) => {
            assert.equal(typeof harvest.timeEntries.list, 'function');
            done();
        });

        it('should implement ListBy time entries method', (done) => {
            assert.equal(typeof harvest.timeEntries.listBy, 'function');
            done();
        });
    });

    describe('Retrieve a time entry', function() {
        it('should implement Retrieve a time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.retrieve, 'function');
            done();
        });
    });

    describe('Create a time entry', function() {
        it('should implement Create a time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.create, 'function');
            done();
        });
    });

    describe('Update a time entry', function() {
        it('should implement Update a time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.update, 'function');
            done();
        });
    });

    describe('Delete a time entry', function() {
        it('should implement Delete a time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.delete, 'function');
            done();
        });
    });

    describe('Restart a stopped time entry', function() {
        it('should implement Restart a stopped time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.restart, 'function');
            done();
        });
    });

    describe('Stop a running time entry', function() {
        it('should implement Stop a running time entry method', (done) => {
            assert.equal(typeof harvest.timeEntries.stop, 'function');
            done();
        });
    });
});