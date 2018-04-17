let base = require('../mixins/Base2.js');
let pick = require('lodash/pick.js');
let request = require('request-promise');

function Invoice_Messages(options) {
    this.name = 'messages';
    this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
    this.options = options;
}

Object.assign(Invoice_Messages.prototype, pick(base, ['list', 'create', 'delete']));

Invoice_Messages.prototype.mark = function(invoice_id, params, cb) {
    this.options.url = this.baseUri + invoice_id + '/' + this.name;
    this.options.method = 'POST';
    this.options.body = JSON.stringify(params);

    return request(this.options, cb);
};

module.exports = Invoice_Messages;