export interface ISuccessResponseProps {
  data: Array<Record<string, string>>
  statusCode: number
}
export interface IFailedResponseProps {
  error: Array<Record<string, string>> | string
  statusCode: number
}
