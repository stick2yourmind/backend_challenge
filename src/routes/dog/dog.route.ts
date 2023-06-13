import { Router } from 'express'
import {
  createDog,
  getAllDogs
} from '../../controllers/dog.controller'

const router = Router()

router.get('/', getAllDogs)

router.post('/', createDog)

export default router
