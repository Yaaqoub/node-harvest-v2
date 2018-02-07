let base = require('../mixins/Base.js');

function Tasks(options) {
    this.name = 'tasks';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Tasks.prototype, base);

module.exports = Tasks;