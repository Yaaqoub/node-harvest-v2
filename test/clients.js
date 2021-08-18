const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

let clientData = {};

describe('Clients API', () => {
  before((done) => {
    clientData.CLIENT_NAME = factory.generateRandomNames('CLIENT');
    done();
  });

  after((done) => {
    clientData = {};
    done();
  });

  describe('Create a client', () => {
    it('should implement Create a client method', (done) => {
      assert.equal(typeof harvest.clients.create, 'function');
      done();
    });

    it('should Create a client', async () => {
      const client = await harvest.clients.create({
        name: clientData.CLIENT_NAME,
        currency: 'EUR',
      });

      clientData.CLIENT_ID = factory.getID(client);
      assert.equal(typeof clientData.CLIENT_ID, 'number', 'The response body should contain a id');
    });
  });

  describe('List all clients', () => {
    it('should implement List all clients method', (done) => {
      assert.equal(typeof harvest.clients.list, 'function');
      done();
    });

    it('should list all clients', async () => {
      const clients = await harvest.clients.list();
      assert(clients);
    });

    it('should implement ListBy clients method', (done) => {
      assert.equal(typeof harvest.clients.listBy, 'function');
      done();
    });

    it('should ListBy all clients', async () => {
      const clients = await harvest.clients.listBy({
        per_page: '10',
        page: '2',
      });
      assert(clients);
    });
  });

  describe('Retrieve a client', () => {
    it('should implement Retrieve a client method', (done) => {
      assert.equal(typeof harvest.clients.retrieve, 'function');
      done();
    });

    it('should retrieve a client', async () => {
      assert(clientData.CLIENT_ID);
      const client = await harvest.clients.retrieve(clientData.CLIENT_ID);
      assert(client);
      assert.equal(client.id, clientData.CLIENT_ID);
      assert.equal(client.name, clientData.CLIENT_NAME);
    });
  });

  describe('Update a client', () => {
    it('should implement Update a client method', (done) => {
      assert.equal(typeof harvest.clients.update, 'function');
      done();
    });

    it('should update a client', async () => {
      assert(clientData.CLIENT_ID);
      const client = await harvest.clients.update(clientData.CLIENT_ID, {
        address: 'random address',
      });
      assert(client);
    });
  });

  describe('Delete a client', () => {
    it('should implement Delete a client method', (done) => {
      assert.equal(typeof harvest.clients.delete, 'function');
      done();
    });

    it('should Delete a client', async () => {
      assert(clientData.CLIENT_ID);
      await harvest.clients.delete(clientData.CLIENT_ID);
    });
  });
});
