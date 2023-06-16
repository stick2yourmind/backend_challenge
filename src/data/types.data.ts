import { type Request } from 'express'
export interface IDog {
  color: string
  name: string
  tailLength: number
  weight: number
}

export interface RequestQuery {
  attribute?: string | string []
  order?: string | string []
  pageNumber?: string | string []
  pageSize?: string | string []
}
export type DogRequest = Request<object, object, object, RequestQuery>
