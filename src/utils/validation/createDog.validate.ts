import { Min, IsDefined, validate, IsNumber, IsString } from 'class-validator'
import { errorLogger } from '../../config/logger.config'
import { type ICreateDogProps } from './types.validate'

export class CreateDogValidate {
  @IsDefined({
    message: ({ property }: { property: string }) => `${property} is required`
  })
  @IsString()
    name: string

  @IsDefined({
    message: ({ property }: { property: string }) => `${property} is required`
  })
  @IsString()
    color: string

  @IsDefined({
    message: ({ property }: { property: string }) => `${property} is required`
  })
  @Min(1)
  @IsNumber()
    tailLength: number

  @IsDefined({
    message: ({ property }: { property: string }) => `${property} is required`
  })
  @Min(1)
  @IsNumber()
    weight: number

  constructor ({ color, name, tailLength, weight }: ICreateDogProps) {
    this.color = color
    this.name = name
    this.tailLength = tailLength
    this.weight = weight
  }

  getAttributes () {
    return {
      color: this.color,
      name: this.name,
      tailLength: this.tailLength,
      weight: this.weight
    }
  }

  async isValid () {
    try {
      const errors = await validate(this)
      if (errors.length > 0) {
        const resError = errors.map(error => {
          const property = error.property
          const message = Object.values(error?.constraints || {}).toString()
          return { [property]: message }
        })
        return { value: false, error: resError }
      }
      return { value: true, error: null }
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message)
      else
        errorLogger(error)
    }
  }
}
