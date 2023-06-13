import { type NextFunction, type Request, type Response } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'
import { objectArrayToObjectSnake } from '../utils/adapters.util'
import { GetDogValidate } from '../utils/validation/getDog.validate'
import { CreateDogValidate } from '../utils/validation/createDog.validate'

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
    const dog = new CreateDogValidate({ name, color, tailLength, weight })
    const isValid = await dog.isValid()
    if (isValid?.value)
      return res.status(HTTP_CODE.OK).json({ message: true })
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
