export interface ICreateDogProps {
  color: string
  name: string
  tailLength: number
  weight: number
}

export interface IGetDogProps {
  attribute?: string
  order?: string
  pageNumber?: number
  pageSize?: number
}
