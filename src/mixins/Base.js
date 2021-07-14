const fetch = require('node-fetch');

const base = {

  list(cb) {
    this.options.url = this.baseUri;
    this.options.method = 'GET';
    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  retrieve(id, cb) {
    if (id) {
      this.options.url = `${this.baseUri}/${id}`;
    } else {
      this.options.url = this.baseUri;
    }
    this.options.method = 'GET';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  create(params, cb) {
    this.options.url = this.baseUri;
    this.options.method = 'POST';
    this.options.body = JSON.stringify(params);

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  update(id, params, cb) {
    this.options.url = `${this.baseUri}/${id}`;
    this.options.method = 'PATCH';
    this.options.body = JSON.stringify(params);

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  delete(id, cb) {
    this.options.url = `${this.baseUri}/${id}`;
    this.options.method = 'DELETE';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = base;
