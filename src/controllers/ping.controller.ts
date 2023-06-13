import { type Request, type Response, type NextFunction } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'

export const getPing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    console.log('🚀 ~ file: dog.controller.ts:10 ~ getAllDogs ~ response:', response)
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}
