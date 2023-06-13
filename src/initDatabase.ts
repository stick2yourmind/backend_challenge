import sql = require('mssql')
import { errorLogger, infoLogger } from './config/logger.config'

const sqlConfig = {
  user: 'sa',
  password: 'Password12345',
  database: 'master',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const createDatabase = () => {
  const pool = new sql.ConnectionPool(sqlConfig)

  pool.connect(async (error) => {
    if (error)
      errorLogger(error)
    try {
      const queryResult = await pool.query(`
        IF NOT EXISTS(
          SELECT name FROM master.dbo.sysdatabases
            WHERE name = N'codebridge'
          ) 
          CREATE DATABASE [codebridge]`
      )
      infoLogger(queryResult)
    } catch (error) {
      errorLogger(error)
    }
  })
}
const populateTable = async () => {
  try {
    await sql.connect(sqlConfig)

    const table = new sql.Table('table')

    table.create = true

    table.columns.add('one', sql.VarChar(2))
    table.columns.add('two', sql.VarChar(2))
    table.columns.add('three', sql.VarChar(2))

    const rowObj = { one: '13', two: '14', three: '15' }
    const rowArr = ['16', '17', '18']

    // converting obj to arr of object value
    const rowObjArr = Object.values(rowObj)

    // adding array to the table, using array destructuring
    table.rows.add(...rowObjArr)
    table.rows.add(...rowArr)

    const request = new sql.Request()
    request.bulk(table, (err, result) => {
      console.log('🚀 ~ file: initDatabase.ts:23 ~ request.bulk ~ result:', result)
      console.log('🚀 ~ file: initDatabase.ts:23 ~ request.bulk ~ err:', err)
      // ... error checks
    })
  } catch (err) {
    console.log('🚀 ~ file: initDatabase.ts:32 ~ init ~ err:', err)
    // ... error checks
  }
}

createDatabase()
// init()
//   .then(res => { console.log(res) })
//   .catch(err => { console.log(err) })
