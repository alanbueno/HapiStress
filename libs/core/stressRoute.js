module.exports = (server) => {
    server.route(
        {
            method: 'POST',
            path: '/stress',
            config: trataRequest
        }
    )
}

let stressController = require('./stressController.js'),
    Joi = require('joi');

let trataRequest = {
    handler: stressController.Main,
    validate: {
        payload: {
            url: Joi.string().required(),
            concurrent: Joi.string().required(),
            responseWaittime: Joi.string().required(),
            threads: Joi.string().required(),
            force: Joi.string().optional()
        }
    }
}