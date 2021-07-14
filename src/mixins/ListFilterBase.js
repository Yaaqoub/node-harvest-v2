const fetch = require('node-fetch');

const listParams = ['user_id', 'client_id', 'project_id', 'is_billed', 'is_running', 'updated_since', 'from', 'to', 'page', 'per_page', 'is_active'];

const listFilterBase = {

  listBy(params, cb) {
    let link = '?';
    for (const datax in params) {
      if (-1 !== listParams.indexOf(datax)) {
        link = `${link + datax}=${params[datax]}&`;
      }
    }

    this.options.url = `${this.baseUri}/${link.slice(0, -1)}`;
    this.options.method = 'GET';
    console.log('listby');

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  restart(timeEntryID, cb) {
    this.options.url = `${this.baseUri}/${timeEntryID}/restart`;
    this.options.method = 'PATCH';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  stop(timeEntryID, cb) {
    this.options.url = `${this.baseUri}/${timeEntryID}/stop`;
    this.options.method = 'PATCH';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = listFilterBase;
