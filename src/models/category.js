const categoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
  }
  );
  return Category
};

module.exports = categoriesModel;