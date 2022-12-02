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

// const verifyToken = (authorization) => {
//   try {
//     const payload = jwt.verify(authorization, JWT_SECRET);
//     return payload;
//   } catch (error) {
//     return { isError: true, error };
//   }
// };

module.exports = {
  createToken,
  // verifyToken,
};
