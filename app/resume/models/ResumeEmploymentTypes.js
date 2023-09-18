const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume');
const EmploymentType = require('../../employment-type/EmploymentType');
const ResumeEmploymentType = sequelize.define('ResumeEmploymentType', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
   
  },
  {
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
  }
); 

Resume.belongsToMany(EmploymentType, {
  through: ResumeEmploymentType,
  foreignKey: 'ResumeId',
  otherKey: 'EmploymentTypeId',
  as: 'employmentTypes'
});

EmploymentType.belongsToMany(Resume, {
  through: ResumeEmploymentType,
  foreignKey: 'EmploymentTypeId',
  otherKey: 'ResumeId'
});


module.exports = ResumeEmploymentType;
