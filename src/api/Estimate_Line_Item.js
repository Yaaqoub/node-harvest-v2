let base = require('../mixins/Base.js');

function Estimate_Line_Item(options) {
    this.name = 'estimates';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Estimate_Line_Item.prototype, pick(base, ['create', 'update', 'delete']));

module.exports = Estimate_Line_Item;