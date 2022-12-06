const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'secretJWT';

const isValidToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(authorization, secret);
    
    const user = await User.findByPk(decoded.data.id);

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  isValidToken,
};
