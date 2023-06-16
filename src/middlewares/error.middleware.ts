import { type ErrorRequestHandler } from 'express'
import { apiFailedResponse } from '../utils/api.util'
import { errorLogger } from '../config/logger.config'
import { HTTP_CODE } from '../data/httpCode.data'
import CustomError from '../utils/error.util'

const errorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const status = error.status || HTTP_CODE.BAD_REQUEST
  let errorResponse = {}
  if (error instanceof CustomError)
    errorResponse = apiFailedResponse({
      error: error.getInformation().error,
      statusCode: error.getInformation().statusCode
    })
  else
    errorResponse = apiFailedResponse({
      error: 'An error has ocurred',
      statusCode: status
    })
  errorLogger({ ...errorResponse, error })
  return res.status(status).json(errorResponse)
}

export default errorMiddleware
