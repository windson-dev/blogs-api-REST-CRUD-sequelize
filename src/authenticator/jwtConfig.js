const jwt = require('jsonwebtoken');

const secret = 'secretJWT';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (userWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
