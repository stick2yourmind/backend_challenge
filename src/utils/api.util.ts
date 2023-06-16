import crypto from 'crypto'
import { type IFailedResponseProps, type ISuccessResponseProps } from './types.util'

export const apiSuccessResponse = ({ data, statusCode = 200 }: ISuccessResponseProps) => {
  return {
    data,
    error: false,
    statusCode
  }
}

export const apiFailedResponse = ({ error, statusCode = 500 }: IFailedResponseProps) => {
  const id = crypto.randomUUID()
  return {
    error: true,
    message: error,
    errorId: id,
    statusCode
  }
}
