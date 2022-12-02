const { getByEmail } = require('../services/userService');

const isValidCreateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regexEmail = /^\S+@\S+\.\S+$/;

  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  if (displayName.length < 8) {
  return res.status(400)
  .json({ message: '"displayName" length must be at least 8 characters long' });
}
  return next();
};

const isValidExistEmail = async (req, res, next) => {
  const { email } = req.body;
  const result = await getByEmail(email);

  if (result) {
    return res.status(409).send({ message: 'User already registered' });
  }
  return next();
};

module.exports = {
  isValidCreateUser,
  isValidExistEmail,
};
