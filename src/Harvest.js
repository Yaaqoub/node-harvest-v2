'use strict';

let HeaderAuth = require('./authentication/HeaderAuth'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

module.exports = class Harvest {
    constructor(config) {
        this.headerAuth = new HeaderAuth(config);

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
};