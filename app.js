import dotenv from 'dotenv'
import express from 'express'
import genreRouter from './routes/genre.js'
import filmRouter from './routes/film.js'
import unicmRouter from './routes/unic.js'

dotenv.config()
const app = express()
app.use(express.json())

// Constants
const PORT = process.env.PORT || 8080

app.use('/api', genreRouter)
app.use('/api', filmRouter)
app.use('/api', unicmRouter)

// Server
app.listen(PORT, err => {
	if (err) {
		return console.log(err)
	}
	console.log(`OK - Server, PORT ${PORT}`)
})
