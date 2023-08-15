const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const SpecializationType = require('./SpecializationType')

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

Specialization.belongsTo(SpecializationType, {
  foreignKey: 'specializationTypeId',
});
SpecializationType.hasMany(Specialization, {
  foreignKey: 'specializationTypeId',
  as: "specialization"
})
module.exports = Specialization;
