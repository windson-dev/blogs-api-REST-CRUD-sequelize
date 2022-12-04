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

module.exports = {
  findAll,
};
