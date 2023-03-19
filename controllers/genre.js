import db from '../database/index.js'

export const createGenre = async (req, res) => {
	try {
		const { title } = req.body
		const data = await db.query(`INSERT INTO genre (title) VALUES ($1) RETURNING *`, [title])
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const getGenres = async (req, res) => {
	try {
		const data = await db.query(`SELECT * FROM genre`)
		if (!data) return res.json({ message: 'Не удалось получить жанры' })
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const getOneGenre = async (req, res) => {
	try {
		const id = req.params.id
		const data = await db.query(`SELECT * FROM genre where id = $1`, [id])
		if (!data) return res.json({ message: 'Не удалось получить жанр' })
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const updateeGenre = async (req, res) => {
	try {
		const { id, title } = req.body
		const data = await db.query(`UPDATE genre set title = $1 where id = $2 RETURNING *`, [title, id])
		res.json(data.rows)
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}

export const deleteGenre = async (req, res) => {
	try {
		const id = req.params.id
		const data = await db.query(`SELECT * FROM genre where id = $1`, [id])
		await db.query(`DELETE FROM genre where id = $1`, [id])
		res.json({ message: `Жанр удален - ${data.rows[0].title}` })
	} catch (err) {
		res.status(400).json({ message: 'Ошибка на сервере' })
	}
}
