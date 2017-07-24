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
      count: Joi.string().optional(),
      concurrent: Joi.string().optional(),
      responseWaittime: Joi.string().required(),
      threads: Joi.string().required(),
      force: Joi.string().optional(),
      dynamicParam: Joi.string().optional()
    }
  }
}