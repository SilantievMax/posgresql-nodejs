import { Router } from 'express'
import * as unicController from '../controllers/unic.js'

const router = new Router()

router.get('/unic', unicController.getUnic)

export default router
