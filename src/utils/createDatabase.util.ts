import sql = require('mssql')
import { errorLogger, infoLogger } from '../config/logger.config'
import { APP_DATABASE_NAME, CREATE_DATABASE_QUERY, initialSqlConfig } from '../config/database.config'

const createDatabase = () => {
  const pool = new sql.ConnectionPool(initialSqlConfig)

  pool.connect(async (error) => {
    if (error)
      errorLogger(error)
    try {
      await pool.query(CREATE_DATABASE_QUERY)
      infoLogger(`Database: ${APP_DATABASE_NAME} created`)
      await pool.close()
    } catch (error) {
      errorLogger(error)
    }
  })
}

createDatabase()
