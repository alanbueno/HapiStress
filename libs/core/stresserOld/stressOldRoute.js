module.exports = (server) => {
  server.route(
    {
      method: 'POST',
      path: '/stressOld',
      config: trataRequest
    }
  )
}

let stressController = require('./stressOldController.js'),
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