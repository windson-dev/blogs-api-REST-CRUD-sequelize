const { createCategory, findAll } = require('../services/categoryService');

const categoryCreate = async (req, res) => {
  const { name } = req.body;

  const category = await createCategory({ name });

  return res.status(201).json(category);
};

const findAllCategory = async (req, res) => {
  const categories = await findAll();

  return res.status(200).json(categories);
};

module.exports = {
  categoryCreate,
  findAllCategory,
};
