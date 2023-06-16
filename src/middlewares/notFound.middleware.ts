import { type Response, type Request, type NextFunction } from 'express'
import { HTTP_CODE } from '../data/httpCode.data'
import { warnLogger } from '../config/logger.config'
import { apiFailedResponse } from '../utils/api.util'

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const status = HTTP_CODE.NOT_FOUND
  const errorItem = `${req.method}: ${req.baseUrl}${req.path} not found`
  const errorResponse = apiFailedResponse({
    error: errorItem,
    statusCode: status
  })
  warnLogger(errorResponse)
  return res.status(status).json(errorResponse)
}

export default notFoundMiddleware
