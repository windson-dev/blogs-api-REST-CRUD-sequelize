const categoriesModel = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  });
  return Categories
};

module.exports = categoriesModel;