module.exports = (server) => {
  server.route(
    [
      {
        method: 'POST',
        path: '/stress',
        config: {
          handler: stressController.Stress,
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
      },
      {
        method: 'POST',
        path: '/flowStress',
        config: {
          handler: stressController.FlowStress,
          validate: {
            payload: {
              stressType: Joi.string().required(),
              target: Joi.string().required(),
              url: Joi.array().min(1).items(
                Joi.object().keys({
                method: Joi.string().required(),
                path: Joi.string().required(),
                body: Joi.optional()
              })),
              rpm: Joi.number().integer().required(),
              duration: Joi.number().integer().required(),
              variables: Joi.optional(),
            }
          }
        }
      },
      {
        method: 'GET',
        path: '/health',
        handler: (req, reply) => {
          reply('ok').code(200);
        }
      }
    ]
  );
}

let stressController = require('./stressController.js'),
  Joi = require('joi');