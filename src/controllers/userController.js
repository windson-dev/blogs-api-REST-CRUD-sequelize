const { createUser } = require('../services/userService');

const userCreate = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const { token } = await createUser({ email, password, displayName, image });

  res.status(201).json({ token });
};

module.exports = {
  userCreate,
};
