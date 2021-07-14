module.exports = class Auth {
  constructor(config) {
    let harvestAccountId = '';

    if (config.account_ID) {
      harvestAccountId = config.account_ID;
    }

    if (config.scope) {
      harvestAccountId = config.scope.slice(10);
    }

    this.headers = {
      'Harvest-Account-ID': harvestAccountId,
      Authorization: `Bearer ${config.access_token}`,
      'User-Agent': config.user_agent,
      'Content-Type': 'application/json',
    };
  }

  header() {
    return this.headers;
  }
};
