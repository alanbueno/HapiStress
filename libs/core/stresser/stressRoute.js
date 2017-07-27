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
      stressType: Joi.string().required(),
      target: Joi.string().required(),
      url: Joi.string().required(),
      rpm: Joi.number().integer().required(),
      duration: Joi.number().integer().required(),
      variables: Joi.optional(),
    }
  }
}