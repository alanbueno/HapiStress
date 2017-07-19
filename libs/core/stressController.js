module.exports = {
    Main: Main
};

let stressService = require('./stressService.js');

function Main(req, reply) {
    stressService.StartStress(req, reply);
}

