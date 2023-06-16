import { Min, validate, IsString, IsIn, IsInt, IsOptional, Max } from 'class-validator'
import { errorLogger } from '../../config/logger.config'
import { type IGetDogProps } from './types.validate'
import { type IGetDogAttributes } from '../types.util'

export class GetDogValidate {
  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
    order?: unknown

  @IsString()
  @IsIn(['name', 'color', 'tail_length', 'weight'])
    attribute?: unknown

  @IsOptional()
  @Min(1)
  @Max(500)
  @IsInt()
    pageNumber?: unknown

  @IsOptional()
  @Min(1)
  @Max(50)
  @IsInt()
    pageSize?: unknown

  constructor ({ attribute, order, pageNumber, pageSize }: IGetDogProps) {
    this.attribute = attribute ?? 'name'
    this.order = order ?? 'asc'
    this.pageNumber = pageNumber ?? 1
    this.pageSize = pageSize ?? 10
  }

  getAttributes () {
    return {
      attribute: String(this.attribute).toLowerCase() as IGetDogAttributes['attribute'],
      order: String(this.order).toLowerCase() as IGetDogAttributes['order'],
      pageNumber: this.pageNumber as IGetDogAttributes['pageNumber'],
      pageSize: this.pageSize as IGetDogAttributes['pageSize']
    }
  }

  async isValid () {
    try {
      const errors = await validate(this)
      if (errors.length > 0) {
        const resError = errors.map(error => {
          const property = error.property
          const message = Object.values(error?.constraints ?? {}).toString()
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
