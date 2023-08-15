const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const SpecializationType = sequelize.define('SpecializationType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 


module.exports = SpecializationType;
