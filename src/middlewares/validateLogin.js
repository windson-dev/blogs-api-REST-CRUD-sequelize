// const Joi = require('joi');

// const validateLogin = (req, _res, next) => {
//   const { error } = Joi.object({
//     email: Joi.string().min(1).required()
//     .messages({
//       'any.required': 'Some required fields are missing',
//       'string.empty': 'Some required fields are missing',
//     }),
//     password: Joi.string().min(1).required().messages({
//       'any.required': 'Some required fields are missing',
//       'string.empty': 'Some required fields are missing',
//     }),
//   }).validate(req.body);

//   if (error) {
//     return next({ message: error.message });
//   }
//   return next();
// };

// module.exports = {
//   validateLogin,
// };
