import colors from 'colors'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import connectDB from './db/dbConnect.js'
import transactionsRouter from './routes/transactions.js'
const app = express()
connectDB()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000
app.use('/api/v1/user', transactionsRouter)
app.get('/', async function (req, res) {
	res.send('Welcome to Expenses tracker main page!')
})

if (process.env.NODE_ENV !== 'development') {
	app.use(morgan('dev'))
}
app.listen(
	PORT,
	console.log(
		colors.yellow.bold(
			`server is listening in ${process.env.NODE_ENV}  on port ${PORT}`
		)
	)
)
