module.exports = class HeaderAuth {
    constructor (config) {
        this.headers = {
            'Harvest-Account-ID': config.account_ID,
            'Authorization': 'Bearer ' + config.access_token,
            'User-Agent': config.user_agent,
            'Content-Type': 'application/json'
        };
    }

    header() {
        return this.headers;
    }
};