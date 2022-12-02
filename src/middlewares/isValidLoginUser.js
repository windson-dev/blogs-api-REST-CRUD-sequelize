const { findByEmail } = require('../services/userService');

const isBodyValid = (email, password) => email && password;

const isValidLoginUser = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await findByEmail(email);
  
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return next();
};

module.exports = {
  isValidLoginUser,
};
