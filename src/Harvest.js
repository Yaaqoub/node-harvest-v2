'use strict';

let Auth = require('./authentication/Auth'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

module.exports = class Harvest {
    constructor(config) {
        if (config.CLIENT_ID) {
            this._CLIENT_ID = config.CLIENT_ID;

            if (config.STATE) {
                this._STATE = config.STATE;
            }

            if (config.REDIRECT_URI) {
                this._REDIRECT_URI = config.REDIRECT_URI;
            }

        } else if(config.scope || config.account_ID) {
            this.headerAuth = new Auth(config);

        } else {
            console.log('There is something wrong with config');
        }

        if (this.headerAuth) {
            this.options = {
                url: '',
                method: '',
                headers: this.headerAuth.header(),
                body: '',
                resolveWithFullResponse: false
            };

            fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
                // Refacto this line
                let prop = camelCase(name.slice(0, -3));
                let Resource = require(`./api/${name}`);

                this[prop] = new(Resource)(this.options);
            });
        }
    }

    get getUserURL() {
        let urlString = 'https://id.getharvest.com/oauth2/authorize?client_id=' + this._CLIENT_ID + '&response_type=token';

        if (this._STATE) {
            urlString += '&state=' + this._STATE;
        }

        if (this._REDIRECT_URI) {
            urlString += '&redirect_uri=' + this._REDIRECT_URI;
        }
        return urlString;
    }
};