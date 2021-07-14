const fs = require('fs');
const path = require('path');
const Auth = require('./authentication/Auth');

module.exports = class Harvest {
  constructor(config) {
    if (config.CLIENT_ID) {
      this.CLIENT_ID = config.CLIENT_ID;

      if (config.STATE) {
        this.STATE = config.STATE;
      }

      if (config.REDIRECT_URI) {
        this.REDIRECT_URI = config.REDIRECT_URI;
      }
    } else if (config.scope || config.account_ID) {
      this.headerAuth = new Auth(config);
    } else {
      console.warn('There is something wrong with config');
    }

    if (this.headerAuth) {
      this.options = {
        headers: this.headerAuth.header(),
      };

      fs.readdirSync(path.join(__dirname, 'api')).forEach((name) => {
        // Refactor this line
        const prop = name.slice(0, -3);
        const Resource = require(`./api/${name}`); // eslint-disable-line

        this[prop] = new (Resource)(this.options);
      });
    }
  }

  get getUserURL() {
    let urlString = `https://id.getharvest.com/oauth2/authorize?client_id=${this.CLIENT_ID}&response_type=token`;

    if (this.STATE) {
      urlString += `&state=${this.STATE}`;
    }

    if (this.REDIRECT_URI) {
      urlString += `&redirect_uri=${this.REDIRECT_URI}`;
    }
    return urlString;
  }
};
