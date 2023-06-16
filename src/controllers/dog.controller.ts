import { type NextFunction, type Request, type Response } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'
import { objectArrayToObjectSnake } from '../utils/adapters.util'
import { GetDogValidate } from '../utils/validation/getDog.validate'
import { createDogService } from '../services/dog/dog.service'
import { apiSuccessResponse } from '../utils/api.util'

export const getAllDogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { attribute, pageNumber, pageSize, order } = req.body
    const dog = new GetDogValidate({ attribute, pageNumber, pageSize, order })
    const isValid = await dog.isValid()
    if (isValid?.value)
      return res.status(HTTP_CODE.OK).json({ message: true })
    else
      return res
        .status(HTTP_CODE.BAD_REQUEST)
        .json({ error: isValid?.error })
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
    else
      return res
        .status(HTTP_CODE.BAD_REQUEST)
        .json({
          error: objectArrayToObjectSnake(isValid?.error as Array<Record<string, string>>)
        })
  } catch (error) {
    next(error)
  }
}
