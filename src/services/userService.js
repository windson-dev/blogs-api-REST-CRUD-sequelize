const { User } = require('../models');
const { createToken } = require('../authenticator/jwtConfig');

const findByEmail = (email) => User.findOne({ where: { email } });

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _pass, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { user: userWithoutPassword, token };
};

const findAll = async () => {
  const user = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return user;
}; 

const findByUserId = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: {
      exclude: ['password'],
    },
  });
  return user;
};

module.exports = {
  findByEmail,
  createUser,
  findAll,
  findByUserId,
};
