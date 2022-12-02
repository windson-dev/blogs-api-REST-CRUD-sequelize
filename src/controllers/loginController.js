const { findByEmail } = require('../services/userService');
const { createToken } = require('../authenticator/jwtConfig');

const userLogin = async (req, res) => {
  const { email } = req.body;

  const user = await findByEmail(email);
  
  const token = createToken(user);

  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};
