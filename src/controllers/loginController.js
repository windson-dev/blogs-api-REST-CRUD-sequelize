const jwt = require('jsonwebtoken');
const { getByEmail } = require('../services/userService');

const secret = 'secretJWT';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const isBodyValid = (email, password) => email && password;

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await getByEmail(email);
    
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};
