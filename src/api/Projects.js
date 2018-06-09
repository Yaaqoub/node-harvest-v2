let base = require('../mixins/Base.js'),
    filterBase = require('../mixins/ListFilterBase'),
    pick = require('lodash/pick.js');

function Projects(options) {
    this.name = 'projects';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Projects.prototype, base);

Object.assign(Projects.prototype, pick(filterBase, ['listBy']));

module.exports = Projects;