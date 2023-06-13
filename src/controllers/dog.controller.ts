import { type NextFunction, type Request, type Response } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'

export const getAllDogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getDog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createDog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteDog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const editDog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = { message: 'example' }
    return res.status(HTTP_CODE.OK).json(response)
  } catch (error) {
    next(error)
  }
}
