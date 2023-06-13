import server from './src/app'

import { SERVER_PORT } from './src/config/server.config'
import { errorLogger, infoLogger } from './src/config/logger.config'

function main () {
  try {
    server.listen(SERVER_PORT, () => {
      infoLogger(`Server is up and running on port => ${SERVER_PORT}`)
    })

    server.on('error', (error) => {
      errorLogger(error)
    })
  } catch (error) {
    errorLogger(error)
  }
}

main()
