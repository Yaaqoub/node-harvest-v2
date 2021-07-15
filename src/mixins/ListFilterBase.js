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

    const url = `${this.baseUri}/${link.slice(0, -1)}`;
    const method = 'GET';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  restart(timeEntryID, cb) {
    const url = `${this.baseUri}/${timeEntryID}/restart`;
    const method = 'PATCH';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  stop(timeEntryID, cb) {
    const url = `${this.baseUri}/${timeEntryID}/stop`;
    const method = 'PATCH';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = listFilterBase;
