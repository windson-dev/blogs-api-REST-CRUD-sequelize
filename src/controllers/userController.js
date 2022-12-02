const { createUser, findAll } = require('../services/userService');

const userCreate = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const { token } = await createUser({ email, password, displayName, image });

  return res.status(201).json({ token });
};

const findAllUser = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

module.exports = {
  userCreate,
  findAllUser,
};
