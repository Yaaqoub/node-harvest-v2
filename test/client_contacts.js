let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

let clientContactsData = {};

describe('Clients Contacts API', function() {

    before(async() => {
        clientContactsData.CLIENT_NAME = factory.generateRandomNames('CLIENT_');
        clientContactsData.CLIENT_CONTACT_NAME = factory.generateRandomNames('CLIENT_CONTACT');

        const client = await harvest.clients.create({
            'name': clientContactsData.CLIENT_NAME,
            'currency': 'EUR'
        });

        clientContactsData.CLIENT_ID = factory.getID(client);
    });

    after(async() => {
        await harvest.clients.delete(clientContactsData.CLIENT_ID);
    });

    describe('Create a client contact', function() {
        it('should implement Create a client contact method', (done) => {
            assert.equal(typeof harvest.clientContacts.create, 'function');
            done();
        });

        it('should Create a client contact', async() => {
            const clientContact = await harvest.clientContacts.create({
                'client_id': clientContactsData.CLIENT_ID,
                'first_name': clientContactsData.CLIENT_CONTACT_NAME
            });

            clientContactsData.CONTACT_ID = factory.getID(clientContact);
            assert.equal(typeof clientContactsData.CONTACT_ID, 'number', 'The response body should contain a id');
        });
    });

    describe('List all contacts', function() {
        it('should implement List all contacts method', function(done) {
            assert.equal(typeof harvest.clientContacts.list, 'function');
            done();
        });

        it('should List all contacts', async() => {
            const clientContact = await harvest.clientContacts.list();
            assert(clientContact);
        });

        it('should implement ListBy contacts method', (done) => {
            assert.equal(typeof harvest.clientContacts.listBy, 'function');
            done();
        });
    });

    describe('Retrieve a contact', function() {
        it('should implement Retrieve a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.retrieve, 'function');
            done();
        });

        it('should retrieve a contact', async() => {
            assert(clientContactsData.CONTACT_ID);
            const clientContact = await harvest.clientContacts.retrieve(clientContactsData.CONTACT_ID);
            assert(clientContact);
            assert.equal(clientContact.id, clientContactsData.CONTACT_ID);
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
            assert(clientContactsData.CONTACT_ID);
            await harvest.clientContacts.delete(clientContactsData.CONTACT_ID);
        });
    });
});