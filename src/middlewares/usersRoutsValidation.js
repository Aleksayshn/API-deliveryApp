const Joi = require("joi");
const { validateBody } = require("../helpers");

const joiAuthSchema = Joi.object({
  email: Joi.string().required().email({
    minDomainSegments: 2,
  }),
  password: Joi.string().min(3).required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
});


const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const joiOrderSchema = Joi.object().options({ allowUnknown: true });

module.exports = {
  authValidation: validateBody(joiAuthSchema),
  loginValidation: validateBody(joiLoginSchema),
  orderValidation: validateBody(joiOrderSchema),
};
