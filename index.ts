
/* eslint-disable @typescript-eslint/no-floating-promises */
import server from './src/app'

import { SERVER_PORT } from './src/config/server.config'
import { errorLogger, infoLogger } from './src/config/logger.config'
import Color from './src/models/color.model'
import Dog from './src/models/dog.model'
import './src/models/associations.model'
import { sequelize } from './src/database/database'

const seed = () => {
  sequelize.sync().then(() => {
    // Conexión establecida
    console.log('Conexión establecida...')
  }).then(async () => {
    console.log('🚀 asssync')

    // const color1 = await Color.create({
    //   name: 'black'
    // })

    // const color2 = await Color.create({
    //   name: 'white'
    // })

    // const dog1 = await Dog.create({ name: 'Sergio2', tail_length: 38, weight: 40 })
    // const dog2 = await Dog.create({ name: 'Monica2', tail_length: 20, weight: 50 })

    // // band2.addUsers([ user1, user2 ]);
    // dog2.addColor(color1)
    // dog1.addColor(color2)
    const dogOne = await Dog.findByPk(1, {
      include: [{
        model: Color,
        attributes: ['id', 'name']
      }]
    })
    const colorOne = await Color.findByPk(1)
    dogOne.addColor(colorOne)
    dogOne.addColor(colorOne)
    dogOne.addColor(colorOne)
    infoLogger(JSON.stringify(dogOne))
    // dogOne.addColor(colorOne)
    // console.log('🚀 ~ file: index.ts:34 ~ sequelize.sync ~ dogOne:', { dogOne })
  })
}

server.listen(SERVER_PORT, () => {
  infoLogger(`Server is up and running on port => ${SERVER_PORT}`)
  seed()
})

server.on('error', (error) => {
  errorLogger(error)
})
