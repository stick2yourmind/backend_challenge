require('dotenv').config()

module.exports = {
  development: {
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_NAME,
    host: process.env.APP_DATABASE_HOST,
    server: process.env.APP_DATABASE_HOST,
    port: process.env.APP_DATABASE_PORT,
    dialect: 'mssql'
  },
  test: {
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_NAME,
    host: process.env.APP_DATABASE_HOST,
    dialect: 'mssql'
  },
  production: {
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_NAME,
    host: process.env.APP_DATABASE_HOST,
    dialect: 'mssql'
  }
}
