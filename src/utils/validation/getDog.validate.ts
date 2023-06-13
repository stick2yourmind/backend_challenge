import { Min, validate, IsString, IsIn, IsInt, IsOptional } from 'class-validator'
import { errorLogger } from '../../config/logger.config'
import { type IGetDogProps } from './types.validate'

export class GetDogValidate {
  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
    order?: string

  @IsOptional()
  @IsString()
  @IsIn(['name', 'color', 'tail_length', 'weight'])
    attribute?: string

  @IsOptional()
  @Min(1)
  @IsInt()
    pageNumber?: number

  @IsOptional()
  @Min(1)
  @IsInt()
    pageSize?: number

  constructor ({ attribute, order, pageNumber, pageSize }: IGetDogProps) {
    this.attribute = attribute ?? 'name'
    this.order = order ?? 'asc'
    this.pageNumber = pageNumber ?? 1
    this.pageSize = pageSize ?? 10
  }

  getAttributes () {
    return {
      attribute: this.attribute,
      order: this.order,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
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
