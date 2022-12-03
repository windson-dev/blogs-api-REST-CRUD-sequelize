const { createCategory } = require('../services/categoryService');

const categoryCreate = async (req, res) => {
  const { name } = req.body;

  const category = await createCategory({ name });

  return res.status(201).json(category);
};

module.exports = {
  categoryCreate,
};
