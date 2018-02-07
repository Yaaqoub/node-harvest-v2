let base = require('../mixins/Base.js');

function Time_Entries(options) {
    this.name = 'time_entries';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Time_Entries.prototype, pick(base, ['retrieve', 'create', 'update', 'delete']));

Time_Entries.prototype.list = function(params, cb) {
    let listParams = ['user_id', 'client_id', 'project_id', 'is_billed', 'is_running', 'updated_since', 'from', 'to', 'page', 'per_page'];

    let link = "?";

    for (let datax in params) {
        if (listParams.indexOf(datax) != -1) {
            link = link + datax + '=' + params[datax] + '&';
        }
    }

    this.options.url = this.baseUri + '/' + link.slice(0, -1);

    new Request(this.options, cb);
}

Time_Entries.prototype.listAll = function(cb) {
    this.options.url = this.baseUri;

    new Request(this.options, cb);
}

Time_Entries.prototype.restart = function(timeEntryID, cb) {
    this.options.url = this.baseUri + '/' + timeEntryID + '/restart';
    this.options.method = 'PATCH';

    new Request(this.options, cb);
}

Time_Entries.prototype.stop = function(timeEntryID, cb) {
    this.options.url = this.baseUri + '/' + timeEntryID + '/stop';
    this.options.method = 'PATCH';

    new Request(this.options, cb);
}

module.exports = Time_Entries;