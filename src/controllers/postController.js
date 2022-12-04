const { findAll } = require('../services/postService');

const getAllPost = async (req, res) => {
  const blogposts = await findAll();

  return res.status(200).json(blogposts);
};

module.exports = {
  getAllPost,
};
