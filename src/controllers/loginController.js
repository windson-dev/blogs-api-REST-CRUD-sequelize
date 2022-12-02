const jwt = require('jsonwebtoken');
const { getByEmail } = require('../services/userService');

const secret = 'secretJWT';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const userLogin = async (req, res) => {
  const { email } = req.body;

  const user = await getByEmail(email);

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};
