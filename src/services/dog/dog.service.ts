import { type IDog } from '../../data/types.data'
import { CreateDogValidate } from '../../utils/validation/createDog.validate'
import { dogRepository } from '../../repositories/dog.repository'

export const createDogService = async ({ name, color, tailLength, weight }: IDog) => {
  const dogValidation = new CreateDogValidate({ name, color, tailLength, weight })
  const isValid = await dogValidation.isValid()
  if (isValid?.value) {
    const newDog = await dogRepository.create({ name, color, tailLength, weight })
    return { success: true, data: newDog }
  }
  return { success: false, error: isValid?.error }
}
