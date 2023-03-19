import { Router } from 'express'
import * as genreController from '../controllers/genre.js'

const router = new Router()

router.post('/genre', genreController.createGenre)
router.get('/genre', genreController.getGenres)
router.get('/genre/:id', genreController.getOneGenre)
router.put('/genre', genreController.updateeGenre)
router.delete('/genre/:id', genreController.deleteGenre)

export default router
