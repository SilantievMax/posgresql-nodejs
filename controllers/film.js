import db from '../database/index.js'

export const createFilm = async (req, res) => {
	try {
		const {
			title,
			url_img,
			description,
			estimation,
			year_production,
			country,
			slogan,
			age,
			budget,
			genre_id,
			audience_id,
			mounting_id,
			director_id,
			composer_id,
			operator_id,
			producer_id,
			scenario_id
		} = req.body
		const data = await db.query(
			`INSERT INTO film (
				title,
				url_img,
				description,
				estimation,
				year_production,
				country,
				slogan,
				age,
				budget,
				genre_id,
				audience_id,
				mounting_id,
				director_id,
				composer_id,
				operator_id,
				producer_id,
				scenario_id) 
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
			[
				title,
				url_img,
				description,
				estimation,
				year_production,
				country,
				slogan,
				age,
				budget,
				genre_id,
				audience_id,
				mounting_id,
				director_id,
				composer_id,
				operator_id,
				producer_id,
				scenario_id
			]
		)
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const getFilms = async (req, res) => {
	try {
		const data = await db.query(`SELECT * FROM film`)
		if (!data) return res.json({ message: 'Не удалось получить фильмы' })
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const getOneFilm = async (req, res) => {
	try {
		const id = req.params.id
		const data = await db.query(`SELECT * FROM film where id = $1`, [id])
		if (!data) return res.json({ message: 'Не удалось получить фильм' })
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const updateeFilm = async (req, res) => {
	try {
		const {
			id,
			title,
			url_img,
			description,
			estimation,
			year_production,
			country,
			slogan,
			age,
			budget,
			genre_id,
			audience_id,
			mounting_id,
			director_id,
			composer_id,
			operator_id,
			producer_id,
			scenario_id
		} = req.body
		const data = await db.query(
			`UPDATE film set 
		title = $1,
		url_img = $2,
		description = $3,
		estimation = $4,
		year_production = $5,
		country = $6,
		slogan = $7,
		age = $8,
		budget = $9,
		genre_id = $10,
		audience_id = $11,
		mounting_id = $12,
		director_id = $13,
		composer_id = $14,
		operator_id = $15,
		producer_id = $16,
		scenario_id = $17
		where id = $18 RETURNING *`,
			[
				title,
				url_img,
				description,
				estimation,
				year_production,
				country,
				slogan,
				age,
				budget,
				genre_id,
				audience_id,
				mounting_id,
				director_id,
				composer_id,
				operator_id,
				producer_id,
				scenario_id,
				id
			]
		)
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const deleteFilm = async (req, res) => {
	try {
		const id = req.params.id
		const data = await db.query(`SELECT * FROM film where id = $1`, [id])
		await db.query(`DELETE FROM film where id = $1`, [id])
		res.json({ message: `Фильм удален - ${data.rows[0].title}` })
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}
