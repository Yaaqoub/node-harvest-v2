let assert = require('assert'),
    config_auth = require('./config.auth');

let harvest = config_auth.harvest;

describe('Estimate Messages API', function() {
    describe('Get All Estimate Messages', function() {
        it('should return all Estimate Messages', function(done) {
            harvest.estimateMessages.list(1593175);
            done();
        });
    });
});