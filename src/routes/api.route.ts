import { Router } from 'express'
import { API_PATH } from './api.types'
import { dogRoute, pingRoute } from '.'

const router = Router()

/* ------------------------------- API Routes ------------------------------- */
router.use(API_PATH.PING, pingRoute)
router.use(API_PATH.DOGS, dogRoute)

export default router
