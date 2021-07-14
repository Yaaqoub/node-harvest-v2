const fetch = require('node-fetch');

const base = {

  list(cb) {
    const url = this.baseUri;
    const method = 'GET';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  retrieve(id, cb) {
    const url = (id) ? `${this.baseUri}/${id}` :
      this.baseUri;
    const method = 'GET';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  create(params, cb) {
    const url = this.baseUri;
    const method = 'POST';
    const body = JSON.stringify(params);

    return fetch(url, { ...this.options, method, body })
      .then((res) => res.json())
      .then(cb);
  },

  update(id, params, cb) {
    const url = `${this.baseUri}/${id}`;
    const method = 'PATCH';
    const body = JSON.stringify(params);

    return fetch(url, { ...this.options, method, body })
      .then((res) => res.json())
      .then(cb);
  },

  delete(id, cb) {
    const url = `${this.baseUri}/${id}`;
    const method = 'DELETE';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = base;
