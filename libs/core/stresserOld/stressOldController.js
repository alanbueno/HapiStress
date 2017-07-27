module.exports = {
  Main: Main
};

let stressService = require('./stressOldService.js');

function Main(req, reply) {
  stressService.StartStress(req, reply);
}

