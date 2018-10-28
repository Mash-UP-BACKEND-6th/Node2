'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};