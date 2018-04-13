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

        it('should List all clients contacts', (done) => {
            factory.cleanHarvestOptions();
            harvest.clientContacts.list().then((clientsContacts) => {
                assert(clientsContacts);
            });
            done();
        });
    });

    describe('Retrieve a contact', function() {
        it('should implement Retrieve a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.retrieve, 'function');
            done();
        });

        it('should Retrieve a client contact', async() => {
            factory.cleanHarvestOptions();
            assert(CONTACT_ID);

            const theContact = await harvest.clientContacts.retrieve(CONTACT_ID);

            assert(theContact);
            assert.equal(factory.getID(theContact), CONTACT_ID);
        });
    });

    describe('Update a contact', function() {
        it('should implement Update a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.update, 'function');
            done();
        });

        it('should Update a client contact', (done) => {
            factory.cleanHarvestOptions();
            assert(CONTACT_ID);

            harvest.clientContacts.update(CONTACT_ID, {
                title: 'random title'
            }).then((updatedContact) => {
                assert(updatedContact);
            });
            done();
        });
    });

    describe('Delete a contact', function() {
        it('should implement Delete a contact method', function(done) {
            assert.equal(typeof harvest.clientContacts.delete, 'function');
            done();
        });

        it('should Delete a client contact', (done) => {
            factory.cleanHarvestOptions();
            assert(CONTACT_ID);
            harvest.clientContacts.delete(CONTACT_ID);
            done();
        });
    });
});