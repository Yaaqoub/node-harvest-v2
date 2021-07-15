const fetch = require('node-fetch');

const base2 = {

  list(id, cb) {
    const url = `${this.baseUri + id}/${this.name}`;
    const method = 'GET';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  retrieve(id, otherId, cb) {
    const url = `${this.baseUri + id}/${this.name}/${otherId}`;
    const method = 'GET';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },

  create(id, params, cb) {
    const url = `${this.baseUri + id}/${this.name}`;
    const method = 'POST';
    const body = JSON.stringify(params);

    return fetch(url, { ...this.options, method, body })
      .then((res) => res.json())
      .then(cb);
  },

  update(id, otherId, params, cb) {
    const url = `${this.baseUri + id}/${this.name}/${otherId}`;
    const method = 'PATCH';
    const body = JSON.stringify(params);

    return fetch(url, { ...this.options, method, body })
      .then((res) => res.json())
      .then(cb);
  },

  delete(id, otherId, cb) {
    const url = `${this.baseUri + id}/${this.name}/${otherId}`;
    const method = 'DELETE';

    return fetch(url, { ...this.options, method })
      .then((res) => res.json())
      .then(cb);
  },
};

module.exports = base2;
