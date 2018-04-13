var exports = module.exports = {};

const random_number = Math.floor(Math.random() * 10000) + 1

let config_auth = require('./config.auth');
let harvest = config_auth.harvest;

exports.cleanHarvestOptions = function() {
    harvest.options.url = '';
    harvest.options.method = '';
    harvest.options.body = '';
};

exports.generateRandomNames = function(name) {
    return 'HARVEST_TEST_' + name + '_NAME_' + random_number;
};

exports.getID = function(results) {
    if (results) {
        return JSON.parse(results).id;
    }
    return null;
};

exports.getName = function(results) {
    if (results) {
        return JSON.parse(results).name;
    }
    return null;
};