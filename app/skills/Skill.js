const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 

module.exports = Skill;
