require('dotenv').config()

module.exports = {
    username : "high@high",
    password : "@Senha1234",
    database : "projeto_strava",
    host     : "high.mysql.database.azure.com",
    port     : "3306",
    dialect  : "mysql",
    "ssl": true,
    "dialectOptions": {
       "ssl": {
          "require": true
       }
     }
}
