const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

module.exports = {
  getByEmail,
};
