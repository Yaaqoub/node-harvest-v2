const assert = require('assert');
const configAuth = require('./config.auth');
const factory = require('./factory');

const harvest = configAuth.harvest;

const CLIENT_NAME = factory.generateRandomNames('CLIENT_');

let CLIENT_ID = null;
let ESTIMATE_ID = null;

describe('Estimates API', () => {
  before(async () => {
    const client = await harvest.clients.create({
      name: CLIENT_NAME,
      currency: 'EUR',
    });

    CLIENT_ID = factory.getID(client);
  });

  after(async () => {
    assert(CLIENT_ID);
    await harvest.clients.delete(CLIENT_ID);
  });

  describe('Create an Estimate', () => {
    it('should implement Create an Estimate method', (done) => {
      assert.equal(typeof harvest.estimates.create, 'function');
      done();
    });

    it('should Create an Estimate', async () => {
      const newEstimate = await harvest.estimates.create({
        client_id: CLIENT_ID,
        subject: 'Estimate subject example',
      });

      ESTIMATE_ID = factory.getID(newEstimate);
      assert.equal(typeof ESTIMATE_ID, 'number', 'The response body should contain a id');
    });
  });

  describe('List All Estimates', () => {
    it('should implement return all Estimates method', (done) => {
      assert.equal(typeof harvest.estimates.list, 'function');
      done();
    });

    it('should List all Estimates', async () => {
      const estimates = await harvest.estimates.list();
      assert(estimates);
    });

    it('should implement ListBy Estimates method', (done) => {
      assert.equal(typeof harvest.estimates.listBy, 'function');
      done();
    });
  });

  describe('Retrieve an Estimate', () => {
    it('should implement return an Estimate method', (done) => {
      assert.equal(typeof harvest.estimates.retrieve, 'function');
      done();
    });

    it('should Retrieve an Estimate', async () => {
      assert(ESTIMATE_ID);

      const theEstimate = await harvest.estimates.retrieve(ESTIMATE_ID);

      assert(theEstimate);
      assert.equal(theEstimate.id, ESTIMATE_ID);
    });
  });

  describe('Update an Estimate', () => {
    it('should implement Update an Estimate method', (done) => {
      assert.equal(typeof harvest.estimates.update, 'function');
      done();
    });

    it('should Update an Estimate', async () => {
      assert(ESTIMATE_ID);

      const updatedEstimate = await harvest.estimates.update(ESTIMATE_ID, {
        subject: 'updated estimate subject example',
      });

      assert(updatedEstimate);
    });
  });

  describe('Delete an Estimate', () => {
    it('should implement Delete an Estimate method', (done) => {
      assert.equal(typeof harvest.estimates.delete, 'function');
      done();
    });

    it('should Delete an Estimate', async () => {
      assert(ESTIMATE_ID);
      await harvest.estimates.delete(ESTIMATE_ID);
    });
  });
});
