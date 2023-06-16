import { type IDog } from '../../data/types.data'
import { CreateDogValidate } from '../../utils/validation/createDog.validate'
import { dogRepository } from '../../repositories/dog.repository'
import { type IGetDogServiceProps } from '../types.services'
import { GetDogValidate } from '../../utils/validation/getDog.validate'
import { narrowToNumber, narrowToString } from '../../utils/parse.util'

export const createDogService = async ({ name, color, tailLength, weight }: IDog) => {
  const dogValidation = new CreateDogValidate({ name, color, tailLength, weight })
  const isValid = await dogValidation.isValid()
  const arrayColors = color.split('&').sort()
  const sortedColors = arrayColors.join('&')

  if (isValid?.value) {
    const newDog = await dogRepository.create({
      name: name.toLowerCase(),
      color: sortedColors.toLowerCase(),
      tailLength,
      weight
    })
    return { success: true, data: newDog }
  }

  return { success: false, error: isValid?.error }
}

export const getDogService = async ({ attribute, pageNumber, pageSize, order }: IGetDogServiceProps) => {
  const parseAttribute = narrowToString(attribute)
  const parseOrder = narrowToString(order)
  const parsePageNumber = narrowToNumber(pageNumber)
  const parsePageSize = narrowToNumber(pageSize)

  const dogValidation = new GetDogValidate({
    attribute: parseAttribute,
    pageNumber: parsePageNumber,
    pageSize: parsePageSize,
    order: parseOrder
  })

  const isValid = await dogValidation.isValid()
  const dogData = dogValidation.getAttributes()

  if (isValid?.value) {
    const newDog = await dogRepository.getAll(dogData)
    return { success: true, data: newDog }
  }

  return { success: false, error: isValid?.error }
}
