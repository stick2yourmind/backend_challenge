import { type ICustomErrorProps } from './types.util'

class CustomError extends Error {
  private readonly error
  private readonly statusCode
  constructor ({ statusCode, error }: ICustomErrorProps) {
    super()
    this.error = error
    this.statusCode = statusCode
  }

  getInformation () {
    return {
      error: this.error,
      statusCode: this.statusCode
    }
  }
}

export default CustomError
