const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    journalEntry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EntiryBody: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Journal',
  }
);

module.exports = Journal;