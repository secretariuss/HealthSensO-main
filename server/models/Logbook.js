const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Logbook extends Model {}

Logbook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    logbookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logbookBody: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Logbook',
  }
);

module.exports = Logbook;
