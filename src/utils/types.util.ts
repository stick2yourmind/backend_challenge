import type Dog from '../models/dog.model'

export interface ISuccessResponseProps {
  data: Array<Record<string, string>> | Dog[]
  statusCode: number
}
export interface IFailedResponseProps {
  error: Array<Record<string, string>> | string
  statusCode: number
}

export interface ICustomErrorProps {
  error: Array<Record<string, string>> | string
  statusCode: number
}

export interface IGetDogAttributes {
  attribute: 'name' | 'color' | 'tail_length' | 'weight'
  order: 'asc' | 'desc'
  pageNumber: number
  pageSize: number
}
