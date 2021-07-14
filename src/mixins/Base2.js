const fetch = require('node-fetch');

const base2 = {

  list(id, cb) {
    this.options.url = `${this.baseUri + id}/${this.name}`;
    this.options.method = 'GET';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  retrieve(id, otherId, cb) {
    this.options.url = `${this.baseUri + id}/${this.name}/${otherId}`;
    this.options.method = 'GET';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  create(id, params, cb) {
    this.options.url = `${this.baseUri + id}/${this.name}`;
    this.options.method = 'POST';
    this.options.body = JSON.stringify(params);

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  update(id, otherId, params, cb) {
    this.options.url = `${this.baseUri + id}/${this.name}/${otherId}`;
    this.options.method = 'PATCH';
    this.options.body = JSON.stringify(params);

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },

  delete(id, otherId, cb) {
    this.options.url = `${this.baseUri + id}/${this.name}/${otherId}`;
    this.options.method = 'DELETE';

    return fetch(this.options.url, this.options)
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = base2;
