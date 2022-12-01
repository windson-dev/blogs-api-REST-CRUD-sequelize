const jwt = require('jsonwebtoken');

const secret = 'secretJWT';

const createToken = (userWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, {
    expiresIn: '1h',
  });
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
