const assert = require('assert');
const configAuth = require('./config.auth');

const harvest = configAuth.harvest;

describe('Company API', () => {
  describe('Retrieve a company', () => {
    it('should implement Retrieve a company method', (done) => {
      assert.equal(typeof harvest.company.retrieve, 'function');
      done();
    });

    it('should Retrieve a company', async () => {
      const theCompany = await harvest.company.retrieve();
      assert(theCompany);
    });
  });
});
