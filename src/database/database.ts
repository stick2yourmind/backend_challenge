import { Sequelize } from '@sequelize/core'
import { errorLogger, infoLogger } from '../config/logger.config'
import {
  APP_DATABASE_HOST,
  APP_DATABASE_NAME,
  APP_DATABASE_PASSWORD,
  APP_DATABASE_PORT,
  APP_DATABASE_USER
} from '../config/database.config'

export const sequelize = new Sequelize(
  APP_DATABASE_NAME, // db name,
  APP_DATABASE_USER, // username
  APP_DATABASE_PASSWORD, // password
  {
    host: APP_DATABASE_HOST,
    dialect: 'mssql',
    port: APP_DATABASE_PORT,
    logging: false
  }
)

export const tryConnection = async () => {
  try {
    await sequelize.authenticate()
    infoLogger(`Connection to database: '${APP_DATABASE_NAME}' has been established successfully`)
  } catch (error) {
    errorLogger(error)
  }
}
