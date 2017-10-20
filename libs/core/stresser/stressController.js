module.exports = {
    Stress: Stress,
    FlowStress: FlowStress
};

let stressService = require('./stressService.js');

function Stress(req, reply) {
    stressService.StartStress(req, reply);
}

function FlowStress(req, reply) {
    stressService.StartFlowStress(req, reply);
}

