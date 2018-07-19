module.exports = class Auth {
    constructor (config) {
        let harvest_account_id = '';

        if (config.account_ID) {
            harvest_account_id = config.account_ID;
        }

        if (config.scope) {
            harvest_account_id = config.scope.slice(10);
        }

        this.headers = {
            'Harvest-Account-ID': harvest_account_id,
            'Authorization': 'Bearer ' + config.access_token,
            'User-Agent': config.user_agent,
            'Content-Type': 'application/json'
        };
    }

    header() {
        return this.headers;
    }
};