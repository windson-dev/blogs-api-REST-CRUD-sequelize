const { verifyToken } = require('../authenticator/jwtConfig');

const isValidToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const payload = verifyToken(authorization);

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  if (payload.isError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  return next();
};

module.exports = {
  isValidToken,
};
