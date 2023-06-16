import { type GetDogValidate } from '../utils/validation/getDog.validate'

// export interface IGetAllRepositoryProps extends Required<IGetDogServiceProps> {}

export type IGetAllRepositoryProps = ReturnType<GetDogValidate['getAttributes']>
