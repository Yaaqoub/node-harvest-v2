const Harvest = require('../src/Harvest');

const config = {
  account_ID: process.env.ACCOUNT_ID || '',
  access_token: process.env.ACCESS_TOKEN || '',
  user_agent: process.env.USER_AGENT || '',
};

const harvest = new Harvest(config);

module.exports = {
  config,
  harvest,
};
