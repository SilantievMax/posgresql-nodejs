import dotenv from 'dotenv'
import * as pg from 'pg'
const { Pool } = pg.default

dotenv.config()

const pool = new Pool({
	user: process.env.USER_BD,
	password: process.env.PASSWORD_DB,
	host: process.env.HOST_BD,
	port: process.env.PORT_DB,
	database: process.env.DATABASE_DB
})

export default pool
