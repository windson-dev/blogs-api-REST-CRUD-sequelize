const { findAll, findById, updateBlogPost } = require('../services/postService');

const getAllPost = async (_req, res) => {
  const blogposts = await findAll();

  return res.status(200).json(blogposts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;

  const blogposts = await findById(id);

  return res.status(200).json(blogposts);
};

const blogPostUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await updateBlogPost(id, { title, content });

  const getBlogPostById = await findById(id);

  return res.status(200).json(getBlogPostById);
};

module.exports = {
  getAllPost,
  findPostById,
  blogPostUpdate,
};
