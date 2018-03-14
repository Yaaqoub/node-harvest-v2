let auth = require('./config.auth'),
    harvest = auth.harvest;

const random_number = Math.floor(Math.random() * 10000) + 1;

const client_test_name = 'harvest_test_client_name_' + random_number;
const project_test_name = 'harvest_test_project_name_' + random_number;

function getID(results) {
    if (results) {
        return JSON.parse(results).id;
    }
    return null;
}

function createClient (callback) {
    harvest.clients.create({
        'name': client_test_name,
        'currency': 'EUR'
    }, function(error, response, res) {
        callback(getID(res));
    });
}

function createProject () {
    console.log("createProject");
}

function cleanHarvest () {
    console.log("cleanHarvest");
}

module.exports = {
    createClient,
    createProject,
    cleanHarvest
};