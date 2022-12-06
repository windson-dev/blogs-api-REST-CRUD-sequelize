const { findByUserId } = require('../services/userService');

const isBodyValid = (title, content) => title && content;

const isValidPostIdUser = async (req, res, next) => {
  const { id } = req.params;
  const { dataValues } = await findByUserId(id);

  const { title, content } = req.body;

  if (!isBodyValid(title, content)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (req.user.id !== dataValues.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};

module.exports = {
  isValidPostIdUser,
};