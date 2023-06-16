import { errorLogger, infoLogger } from '../config/logger.config'
import { sequelize } from '../database/database'
import Dog from '../models/dog.model'

export const initialSeed = async () => {
  await sequelize.sync()
  await Dog.create(
    {
      name: 'Neo',
      color: 'red&amber',
      tail_length: 22,
      weight: 32
    }
  )
  await Dog.create(
    {
      name: 'Jessy',
      color: 'black&white',
      tail_length: 7,
      weight: 14
    }
  )
}

initialSeed()
  .then(() => { infoLogger('initial seed applied') })
  .catch((error) => {
    console.log('🚀 ~ file: initialSeed.ts:28 ~ error:', error)
    errorLogger('initial seed could not be applied')
  })
