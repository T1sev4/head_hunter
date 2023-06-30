const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const EmploymentType = sequelize.define('EmploymentType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 

module.exports = EmploymentType;
