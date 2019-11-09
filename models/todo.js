module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    //text and complete
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
};