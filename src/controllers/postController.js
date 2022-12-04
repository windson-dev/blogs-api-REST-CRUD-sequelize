const { findAll, findById } = require('../services/postService');

const getAllPost = async (_req, res) => {
  const blogposts = await findAll();

  return res.status(200).json(blogposts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;

  const blogposts = await findById(id);

  return res.status(200).json(blogposts);
};

module.exports = {
  getAllPost,
  findPostById,
};
