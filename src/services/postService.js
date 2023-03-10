const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const blogpost = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
          attributes: {
            exclude: ['password'],
      }, 
    },
    { model: Category, as: 'categories' },
    ],
  });

  return blogpost;
};

const findById = async (id) => {
  const blogpost = await BlogPost.findByPk(id, {
    include: [
      { model: User,
        as: 'user',
          attributes: {
            exclude: ['password'],
      }, 
    },
    { model: Category, as: 'categories' },
    ],
  });

  return blogpost;
};

const updateBlogPost = (id, { title, content }) => {
  const blogpost = BlogPost.update({ title, content }, { where: { id } });

  return blogpost;
};
  
module.exports = {
  findAll,
  findById,
  updateBlogPost,
};
