const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Experience = sequelize.define('Experience', {
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 

module.exports = Experience;
