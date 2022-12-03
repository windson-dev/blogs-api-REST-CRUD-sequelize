const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });

  return category;
};

const findAll = async () => {
  const category = await Category.findAll();

  return category;
};

module.exports = {
  createCategory,
  findAll,
};
