let base = require('../mixins/Base.js');

function Projects(options) {
    this.name = 'projects';
    this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
    this.options = options;
}

Object.assign(Projects.prototype, base);

module.exports = Projects;