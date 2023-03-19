import db from '../database/index.js'

export const getUnic = async (req, res) => {
	try {
		const data = await db.query(
			`SELECT film.id, film.title, film.year_production, genre.title FROM film LEFT JOIN film_genre ON film_genre.film_id=film.id LEFT JOIN genre ON film_genre.genre_id=genre.id `
		)
		if (!data) return res.json({ message: 'Не удалось получить данные' })
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}
