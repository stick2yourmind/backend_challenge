import server from './src/app'

import { SERVER_PORT } from './src/config/server.config'
import { errorLogger, infoLogger } from './src/config/logger.config'
import { sequelize } from './src/database/database'

server.listen(SERVER_PORT, async () => {
  await sequelize.sync()
  infoLogger(`Server is up and running on port => ${SERVER_PORT}`)
})

server.on('error', (error) => {
  errorLogger(error)
})
