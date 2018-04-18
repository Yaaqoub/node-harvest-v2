let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');
const CLIENT_CONTACT_NAME = factory.generateRandomNames('CLIENT_CONTACT');

let CLIENT_ID = null,
    CONTACT_ID = null;

describe('Clients Contacts API', function() {

    before(async() => {
        factory.cleanHarvestOptions();
        const client = await harvest.clients.create({
            'name': CLIENT_NAME,
            'currency': 'EUR'
        });

        CLIENT_ID = factory.getID(client);
    });

    after(async() => {
        factory.cleanHarvestOptions();
        await harvest.clients.delete(CLIENT_ID);
    });

    describe('Create a client contact', function() {
        it('should implement Create a client contact method', (done) => {
            assert.equal(typeof harvest.clientContacts.create, 'function');
            done();
        });

        it('should Create a client contact', async() => {
            factory.cleanHarvestOptions();
            const clientContact = await harvest.clientContacts.create({
                'client_id': CLIENT_ID,
                'first_name': CLIENT_CONTACT_NAME
            });

            CONTACT_ID = factory.getID(clientContact);
            assert.equal(typeof CONTACT_ID, 'number', 'The response body should contain a id');
        });
    });

    describe('List all contacts', function() {
        it('should implement List all contacts method', function(done) {
            assert.equal(typeof harvest.clientContacts.list, 'function');
            done();
        });
    });

    describe('Retrieve a contact', function() {
        it('should implement Retrieve a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.retrieve, 'function');
            done();
        });
    });

    describe('Update a contact', function() {
        it('should implement Update a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.update, 'function');
            done();
        });
    });

    describe('Delete a contact', function() {
        it('should implement Delete a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.delete, 'function');
            done();
        });

        it('should Delete a client contact', async() => {
            factory.cleanHarvestOptions();
            assert(CONTACT_ID);
            await harvest.clientContacts.delete(CONTACT_ID);
        });
    });
});