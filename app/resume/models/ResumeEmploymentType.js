const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Resume = require('./Resume');
const EmploymentType = require('../employment-type/EmploymentType');
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

Resume.belongsTo(EmploymentType, {
  through: ResumeEmploymentType
});

EmploymentType.belongsTo(Resume, {
  through: ResumeEmploymentType
});


module.exports = ResumeEmploymentType;
