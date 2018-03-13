let Harvest = require('../src/Harvest');

const config = {
    account_ID: '842979',
    access_token: '1409550.pt.UsJZAmotXL7HbBy_mRGtPiW5h5-aK_VaRevnPKb1g3EKRPkkQzxwjQYx3k4u5pCYoeAHRCqx0y8FnDtvRq2qtA',
    user_agent: 'Harvest api'
};

const harvest = new Harvest(config);

module.exports = {
    config,
    harvest
}