const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Specialization = sequelize.define('Specialization', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 

Specialization.belongsTo(Country, {
  foreignKey: 'specializationTypeId',
});

module.exports = Specialization;
