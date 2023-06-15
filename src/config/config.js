
module.exports = {
  development: {
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_NAME,
    host: process.env.APP_DATABASE_HOST,
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
