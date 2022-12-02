const { findById } = require('../services/userService');

const isValidUserId = async (req, res, next) => {
  const { id } = req.params;
  const user = await findById(id);

  if (!user) {
    return res.status(404).send({ message: 'User does not exist' });
  }
  next();
};

module.exports = {
  isValidUserId,
};
