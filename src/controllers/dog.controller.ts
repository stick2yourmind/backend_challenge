import { type NextFunction, type Request, type Response } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'
import { objectArrayToObjectSnake } from '../utils/adapters.util'
import { createDogService, getDogService } from '../services/dog/dog.service'
import { apiSuccessResponse } from '../utils/api.util'
import { type DogRequest } from '../data/types.data'
import type Dog from '../models/dog.model'

export const getAllDogs = async (req: DogRequest, res: Response, next: NextFunction) => {
  try {
    const { attribute, pageNumber, pageSize, order } = req.query
    const isValid = await getDogService({ attribute, pageNumber, pageSize, order })

    if (isValid?.success)
      return res.status(HTTP_CODE.OK).json(
        apiSuccessResponse({ data: (isValid.data as Dog[]), statusCode: HTTP_CODE.OK })
      )

    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({
        error: objectArrayToObjectSnake(isValid?.error as Array<Record<string, string>>)
      })
  } catch (error) {
    next(error)
  }
}

export const createDog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, color, tail_length: tailLength, weight } = req.body
    const isValid = await createDogService({ name, color, tailLength, weight })
    if (isValid?.success)
      return res.status(HTTP_CODE.OK).json(
        apiSuccessResponse({ data: isValid.data, statusCode: HTTP_CODE.OK })
      )

    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({
        error: objectArrayToObjectSnake(isValid?.error as Array<Record<string, string>>)
      })
  } catch (error) {
    next(error)
  }
}
