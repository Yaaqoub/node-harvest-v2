let assert = require('assert'),
    Request = require('../src/Request');

describe('Request Test', function() {
    describe('Get All Estimates', function() {
        it('should return all Estimates', function(done) {
            let headers = {
                account_ID: '842979',
                access_token: '1409550.pt.UsJZAmotXL7HbBy_mRGtPiW5h5-aK_VaRevnPKb1g3EKRPkkQzxwjQYx3k4u5pCYoeAHRCqx0y8FnDtvRq2qtA'
            };

            new Request(headers, 'estimates', function (error, response, body) {
                assert(!error);
                assert(Array.isArray(body));
                assert.equal(typeof body[0], 'object');
            });
            done();
        });
    });
});