import { Router } from 'express'
import {
  createDog,
  deleteDog,
  editDog,
  getAllDogs,
  getDog
} from '../../controllers/dog.controller'

const router = Router()

router.get('/', getAllDogs)

router.get('/:id', getDog)

router.post('/', createDog)

router.delete('/:id', deleteDog)

router.put('/:id', editDog)

export default router
