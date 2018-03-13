let Harvest = require('../src/Harvest');

const config = {
    account_ID: '',
    access_token: '',
    user_agent: 'Harvest api'
};

const harvest = new Harvest(config);

module.exports = {
    config,
    harvest
}