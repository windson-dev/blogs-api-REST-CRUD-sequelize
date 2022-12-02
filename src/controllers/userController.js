const { createUser, findAll, findById } = require('../services/userService');

const userCreate = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const { token } = await createUser({ email, password, displayName, image });

  return res.status(201).json({ token });
};

const findAllUser = async (_req, res) => {
  const users = await findAll();

  return res.status(200).json(users);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  
  const user = await findById(id);

  return res.status(200).json(user);
};

module.exports = {
  userCreate,
  findAllUser,
  findUserById,
};
