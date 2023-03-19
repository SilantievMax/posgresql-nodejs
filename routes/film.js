import { Router } from 'express'
import * as filmController from '../controllers/film.js'

const router = new Router()

router.post('/film', filmController.createFilm)
router.get('/film', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)
router.put('/film', filmController.updateeFilm)
router.delete('/film/:id', filmController.deleteFilm)

export default router
