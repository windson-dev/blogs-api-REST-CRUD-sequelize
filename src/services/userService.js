const { User } = require('../models');
const { createToken } = require('../authenticator/jwtConfig');

const getByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _pass, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { user: userWithoutPassword, token };
};

module.exports = {
  getByEmail,
  createUser,
};
