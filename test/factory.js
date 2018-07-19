var exports = module.exports = {};

const random_number = Math.floor(Math.random() * 10000) + 1;

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