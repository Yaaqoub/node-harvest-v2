let link = "?";
let request = require('request-promise');
const listParams = ['user_id', 'client_id', 'project_id', 'is_billed', 'is_running', 'updated_since', 'from', 'to', 'page', 'per_page'];

const listFilterBase = {

    listBy(params, cb) {
        for (let datax in params) {
            if (listParams.indexOf(datax) !== -1) {
                link = link + datax + '=' + params[datax] + '&';
            }
        }

        this.options.url = this.baseUri + '/' + link.slice(0, -1);
        this.options.method = 'GET';
        this.options.body = '';
        return request(this.options, cb);
    },

    restart(timeEntryID, cb) {
        this.options.url = this.baseUri + '/' + timeEntryID + '/restart';
        this.options.method = 'PATCH';
        this.options.body = '';
        return request(this.options, cb);
    },

    stop(timeEntryID, cb) {
        this.options.url = this.baseUri + '/' + timeEntryID + '/stop';
        this.options.method = 'PATCH';
        this.options.body = '';
        return request(this.options, cb);
    }
};

module.exports = listFilterBase;