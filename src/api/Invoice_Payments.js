let base = require('../mixins/Base2.js');
let pick = require('lodash/pick.js');

function Invoice_Payments(options) {
    this.name = 'payments';
    this.baseUri = 'https://api.harvestapp.com/v2/invoices/';
    this.options = options;
}

Object.assign(Invoice_Payments.prototype, pick(base, ['list', 'create', 'delete']));

module.exports = Invoice_Payments;