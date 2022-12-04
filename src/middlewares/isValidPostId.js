const { findById } = require('../services/postService');

const isValidPostId = async (req, res, next) => {
  const { id } = req.params;
  const blogposts = await findById(id);

  if (!blogposts) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return next();
};

module.exports = {
  isValidPostId,
};
