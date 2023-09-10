const fs = require('fs');
const path = require("path")


module.exports = {
  development:{
    username: 'admin',
    password: 'root',
    database: 'admin',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: 'doadmin',
    password: 'AVNS_Coev-QVC8h3eMmdA4Re',
    database: 'defaultdb',
    host: 'db-postgresql-sgp1-79804-do-user-14638949-0.b.db.ondigitalocean.com',
    dialect: 'postgres',
    port: 25060,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
      },
    }
  },
}