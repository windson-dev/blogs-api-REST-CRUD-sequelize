const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });
  
  return User;
};

module.exports = UserModel;