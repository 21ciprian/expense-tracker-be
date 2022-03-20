import express from 'express'
import * as transactions from '../controllers/transactionController.js'
const router = express.Router()
router.get('/', async (req, res) => {
	const allTRansactions = await transactions.getTransactions()
	res.status(200).json({
		success: true,
		payload: allTRansactions,
	})
})

export default router
