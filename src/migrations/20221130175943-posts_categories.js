'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('posts_categories', {
        postId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          field: 'post_id',
        },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'category_id',
          primaryKey: true,
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('posts_categories');
  }
};
