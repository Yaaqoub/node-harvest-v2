const exports = module.exports = {};

const randomNumber = Math.floor(Math.random() * 10000) + 1;

exports.generateRandomNames = (name) => `HARVEST_TEST_${name}_NAME_${randomNumber}`;

exports.getID = (results) => {
  if (results) {
    return JSON.parse(results).id;
  }
  return null;
};

exports.getName = (results) => {
  if (results) {
    return JSON.parse(results).name;
  }
  return null;
};
