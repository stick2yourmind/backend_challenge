export interface ICreateDogProps {
  color: string
  name: string
  tailLength: number
  weight: number
}

export interface IGetDogProps {
  attribute?: unknown
  order?: unknown
  pageNumber?: unknown
  pageSize?: unknown
}
