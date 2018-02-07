let base = require('../mixins/Base.js');

function Estimates(options) {
    this.name = 'estimates';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Estimates.prototype, base);

module.exports = Estimates;