import server from './src/app'

import { SERVER_PORT } from './src/config/server.config'
import { errorLogger, infoLogger } from './src/config/logger.config'
import './src/models/associations.model'

server.listen(SERVER_PORT, () => {
  infoLogger(`Server is up and running on port => ${SERVER_PORT}`)
})

server.on('error', (error) => {
  errorLogger(error)
})
