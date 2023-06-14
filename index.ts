import server from './src/app'

import { SERVER_PORT } from './src/config/server.config'
import { errorLogger, infoLogger } from './src/config/logger.config'
import { sequelize } from './src/database/database'
import './src/models/color/color.model'
import './src/models/dog/dog.model'

async function main () {
  try {
    await sequelize.sync({ alter: true })
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

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
