import log4js from 'log4js'
import path from 'path'

log4js.configure({
  appenders: {
    console: { type: 'console' },
    infoFile: { filename: path.join(__dirname, '../log/info.log'), type: 'file' },
    errorFile: { filename: path.join(__dirname, '../log/error.log'), type: 'file' },
    warningFile: { filename: path.join(__dirname, '../log/warn.log'), type: 'file' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    error: { appenders: ['console', 'errorFile'], level: 'error' },
    info: { appenders: ['console', 'infoFile'], level: 'info' },
    warn: { appenders: ['console', 'warningFile'], level: 'warn' }
  }
})

export const infoLogger = (msg: unknown) => { log4js.getLogger('info').info(msg) }
export const warnLogger = (msg: unknown) => { log4js.getLogger('warn').warn(msg) }
export const errorLogger = (msg: unknown) => { log4js.getLogger('error').error(msg) }
