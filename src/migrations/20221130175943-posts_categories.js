'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('posts_categories', {
        postId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          field: 'post_id',
          references: {
            model: 'blogpost',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'category_id',
          primaryKey: true,
          references: {
            model: 'category',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('posts_categories');
  }
};
