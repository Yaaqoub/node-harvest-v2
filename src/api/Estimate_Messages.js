let base = require('../mixins/Base.js');
let pick = require('lodash/pick.js');

function Estimate_Messages(options) {
    this.name = 'messages';
    this.baseUri = 'https://api.harvestapp.com/v2/estimates';
    this.options = options;
}

Object.assign(Estimate_Messages.prototype, pick(base, ['list', 'create', 'delete']));

Estimate_Messages.prototype.mark = function(estimate_id, params, cb) {
    this.options.url = this.baseUri + '/' + estimate_id + '/' + this.name;
    this.options.method = 'POST';
    this.options.body = JSON.stringify(params);

    return request(this.options, cb);
};

module.exports = Estimate_Messages;