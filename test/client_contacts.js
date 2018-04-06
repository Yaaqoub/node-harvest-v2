let assert = require('assert'),
    config_auth = require('./config.auth'),
    factory = require('./factory');

let harvest = config_auth.harvest;

let client_ID,
    contact_ID;

describe('Clients Contacts API', function() {

    before(function(done) {
        factory.createClient(done, clientID => {
            client_ID = clientID;
        });
    });

    after(function(done) {
        console.log('contact_ID: ' + contact_ID);
        console.log('client_ID: ' + client_ID);
    });

    describe('Create a client contact', function() {
        it('should Create a client contact', function(done) {
            harvest.clientContacts.create({
                'client_id': client_ID,
                'first_name': factory.generateRandomNames('first_name'),
                'last_name': factory.generateRandomNames('last_name'),
                'email': factory.generateRandomNames('email') + '@test.com'
            }, function(error, response, res) {
                contact_ID = factory.getID(res);
                done();
            });
            //assert.equal(typeof harvest.clientContacts.create, 'function');
            done();
        });
    });

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