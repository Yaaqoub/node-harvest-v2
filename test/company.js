let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Company API', function() {
    describe('Retrieve a company', function() {
        it('should implement Retrieve a company method', (done) => {
            assert.equal(typeof harvest.company.retrieve, 'function');
            done();
        });

        it('should Retrieve a company', async() => {
            const theCompany = await harvest.company.retrieve();
            assert(theCompany);
        });
    });
});