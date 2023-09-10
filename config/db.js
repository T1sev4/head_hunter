const { Sequelize } = require('sequelize');
const dbConf = require('./config');
let sequelize;
if(process.env === "production"){
  sequelize = new Sequelize(dbConf.production.database, dbConf.production.username, dbConf.production.password, {
    host: dbConf.production.host,
    dialect: dbConf.production.dialect,
    port: dbConf.production.port,
  });
}else{
  sequelize = new Sequelize(dbConf.development.database, dbConf.development.username, dbConf.development.password, {
    host: dbConf.development.host,
    dialect: dbConf.development.dialect,
  });
}



sequelize
  .authenticate()
  .then(() => {
    console.log('Соединение с базой данных установлено');
  })
  .catch((error) => {
    console.error('Ошибка соединения с базой данных:', error);
  });

module.exports = sequelize;
