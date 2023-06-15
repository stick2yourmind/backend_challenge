import crypto from 'crypto'
import { type ErrorRequestHandler } from 'express'
import { apiFailedResponse } from '../utils/api.util'
import { errorLogger } from '../config/logger.config'
import { HTTP_CODE } from '../data/httpCode.data'

const errorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  // Todo: Analize error to define status code
  const status = error.status || HTTP_CODE.BAD_REQUEST
  const id = crypto.randomUUID()
  const errorResponse = apiFailedResponse({
    error: [{ message: 'An error has ocurred', id }],
    statusCode: status
  })
  errorLogger({ ...errorResponse, error, id })
  return res.status(status).json(errorResponse)
}

export default errorMiddleware
