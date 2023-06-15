import 'dotenv/config'

export const APP_DATABASE_NAME = process.env.APP_DATABASE_NAME ?? ''
export const APP_DATABASE_USER = process.env.APP_DATABASE_USER ?? ''
export const APP_DATABASE_PASSWORD = process.env.APP_DATABASE_PASSWORD ?? ''
export const APP_DATABASE_HOST = process.env.APP_DATABASE_HOST ?? ''
export const APP_INITIAL_DATABASE_NAME = process.env.APP_INITIAL_DATABASE_NAME ?? ''

export const CREATE_DATABASE_QUERY = `
IF NOT EXISTS(
  SELECT name FROM master.dbo.sysdatabases
    WHERE name = N'${APP_DATABASE_NAME}'
  ) 
  CREATE DATABASE [${APP_DATABASE_NAME}]`

export const initialSqlConfig = {
  user: APP_DATABASE_USER,
  password: APP_DATABASE_PASSWORD,
  database: APP_INITIAL_DATABASE_NAME,
  server: APP_DATABASE_HOST,
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
