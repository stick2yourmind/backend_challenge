import { UniqueConstraintError } from '@sequelize/core'
import { type IDog } from '../data/types.data'
import Dog from '../models/dog.model'
import CustomError from '../utils/error.util'
import { HTTP_CODE } from '../data/httpCode.data'
import Color from '../models/color.model'
import '../models/associations.model'

export default class DogRepository {
  async create ({ name, color, tailLength, weight }: IDog): Promise<any> {
    try {
      const [colorRes, created] = await Color.findOrCreate({
        where: { name: color }
      })
      const [colorRes2, created2] = await Color.findOrCreate({
        where: { name: 'blue' }
      })
      const newDog = await Dog.create(
        { name, color, tail_length: tailLength, weight }
      )
      await newDog.addColor(colorRes)
      await newDog.addColor(colorRes2)
      const modifiedDog = await Dog.findByPk(
        newDog.id,
        {
          include: [
            {
              model: Color,
              as: 'colors',
              attributes: ['name', 'id'],
              through: {
                attributes: []
              }
            }
          ]
        }
      )
      console.log('🚀 ~ file: dog.repository.ts:12 ~ DogRepository ~ create ~ created:', created)
      console.log('🚀 ~ file: dog.repository.ts:14 ~ DogRepository ~ create ~ colorRes:', colorRes)
      console.log('🚀 ~ file: dog.repository.ts:17 ~ DogRepository ~ create ~ modifiedDog:', modifiedDog)

      return modifiedDog
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        let errorFields = ''
        const errorEntries = Object.entries(error.fields)
        errorEntries.forEach(([key, value]) => {
          errorFields = errorFields + `${key}: ${value as string}`
        })
        throw new CustomError({
          error: `${errorFields} already exists`,
          statusCode: HTTP_CODE.BAD_REQUEST
        })
      }
      throw error
    }
  }
}

export const dogRepository = new DogRepository()
