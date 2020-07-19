module.exports = function (sequelize, DataTypes) {
  const Pizza = sequelize.define("Pizza", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  });

  return Pizza;
};
