let HeaderAuth = require('./authentication/HeaderAuth'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase'),
    Estimates = require('./api/Estimates');

module.exports = class Harvest {
    constructor(config) {
        this.headerAuth = new HeaderAuth(config);

        this.options = {
            url: '',
            headers: this.headerAuth.header()
        }

        this.estimates = new Estimates(this.options);
    }


    /*getAllApi() {
        fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
            let prop = camelCase(name.slice(0, -3));
            let Resource = require(`./api/${name}`);

            //this[prop] = new(Resource)(this);
            console.log(prop);
        });

    }*/
}