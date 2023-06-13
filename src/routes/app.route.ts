import { Router } from 'express'
import apiRouter from './api.route'
import { API_PATH } from './api.types'

const router = Router()

// Routes
router.use(API_PATH.BASE_API_PATH, apiRouter)

export default router
