let Request = require('../Request');

module.exports = class Time_Entries {

    constructor(options) {
        this.name = 'time_entries';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name + '/';
        this.options = options;
    }

    list(params, cb) {
        let listParams = ['user_id', 'client_id', 'project_id', 'is_billed', 'is_running', 'updated_since', 'from', 'to', 'page', 'per_page'];

        let link = "?";

        for (let datax in params) {
            if (listParams.indexOf(datax) != -1) {
                link = link + datax + '=' + params[datax] + '&';
            }
        }

        this.options.url = this.baseUri + link.slice(0, -1);

        new Request(this.options, cb);
    }

    listAll(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(timeEntryID, cb) {
        this.options.url = this.baseUri + timeEntryID;

        new Request(this.options, cb);
    }

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    update(timeEntryID, params, cb) {
        this.options.url = this.baseUri + timeEntryID;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }

    delete(timeEntryID, cb) {
        this.options.url = this.baseUri + timeEntryID;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }

    restart(timeEntryID, cb) {
        this.options.url = this.baseUri + timeEntryID + '/restart';
        this.options.method = 'PATCH';

        new Request(this.options, cb);
    }

    stop(timeEntryID, cb) {
        this.options.url = this.baseUri + timeEntryID + '/stop';
        this.options.method = 'PATCH';

        new Request(this.options, cb);
    }
}