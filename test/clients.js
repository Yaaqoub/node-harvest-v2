let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT');
let CLIENT_ID = null;

describe('Clients API', function() {
    describe('Create a client', function() {
        it('should implement Create a client method', (done) => {
            assert.equal(typeof harvest.clients.create, 'function');
            done();
        });

        it('should Create a client', async() => {
            factory.cleanHarvestOptions();

            const client = await harvest.clients.create({
                'name': CLIENT_NAME,
                'currency': 'EUR'
            });

            CLIENT_ID = factory.getID(client);
            assert.equal(typeof CLIENT_ID, 'number', 'The response body should contain a id');
        });
    });

    describe('List all clients', function() {
        it('should implement List all clients method', (done) => {
            assert.equal(typeof harvest.clients.list, 'function');
            done();
        });

        it('should list all clients', async () => {
            factory.cleanHarvestOptions();
            const clients = await harvest.clients.list();
            assert(clients);
        });
    });

    describe('Retrieve a client', function() {
        it('should implement Retrieve a client method', (done) => {
            assert.equal(typeof harvest.clients.retrieve, 'function');
            done();
        });

        it('should retrieve a client', async() => {
            factory.cleanHarvestOptions();
            assert(CLIENT_ID);
            const client = await harvest.clients.retrieve(CLIENT_ID);
            assert(client);
            assert.equal(factory.getID(client), CLIENT_ID);
            assert.equal(factory.getName(client), CLIENT_NAME);
        });
    });

    describe('Update a client', function() {
        it('should implement Update a client method', (done) => {
            assert.equal(typeof harvest.clients.update, 'function');
            done();
        });

        it('should update a client', async () => {
            factory.cleanHarvestOptions();
            assert(CLIENT_ID);
            const client = await harvest.clients.update(CLIENT_ID, {
                address: 'random address'
            });

            assert(client);
        });
    });

    describe('Delete a client', function() {
        it('should implement Delete a client method', (done) => {
            assert.equal(typeof harvest.clients.delete, 'function');
            done();
        });

        it('should Delete a client', async() => {
            factory.cleanHarvestOptions();
            assert(CLIENT_ID);
            await harvest.clients.delete(CLIENT_ID);
        });
    });
});