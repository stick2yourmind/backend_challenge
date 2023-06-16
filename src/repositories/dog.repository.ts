/* eslint-disable no-useless-catch */
import { UniqueConstraintError } from '@sequelize/core'
import { type IDog } from '../data/types.data'
import Dog from '../models/dog.model'
import CustomError from '../utils/error.util'
import { HTTP_CODE } from '../data/httpCode.data'
import { type IGetAllRepositoryProps } from './types.repository'

export default class DogRepository {
  async create ({ name, color, tailLength, weight }: IDog): Promise<any> {
    try {
      const newDog = await Dog.create({ name, color, tail_length: tailLength, weight })
      return newDog
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

  async getAll ({ order, attribute, pageNumber, pageSize }: IGetAllRepositoryProps) {
    try {
      const dogs = await Dog.findAll({
        attributes: ['id', 'name', 'weight', 'tail_length', 'color'],
        order: [[attribute, order]],
        offset: pageSize * (pageNumber - 1),
        limit: pageSize
      })
      return dogs
    } catch (error) {
      throw error
    }
  }
}

export const dogRepository = new DogRepository()
