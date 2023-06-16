import { type Request, type Response, type NextFunction } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'
import { PING_MESSAGE_DEFAULT } from '../data/constant.data'

export const getPing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(HTTP_CODE.OK).send(PING_MESSAGE_DEFAULT)
  } catch (error) {
    next(error)
  }
}
