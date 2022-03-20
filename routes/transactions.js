import express from 'express'
import * as transactions from '../controllers/transactionController.js'
const router = express.Router()
router.get('/', async (req, res) => {
	const allTransactions = await transactions.getTransactions()
	res.status(200).json({
		success: true,
		payload: allTransactions,
	})
})
router.post('/', async (req, res) => {
	const newTansaction = await transactions.addTransaction()
	res.status(200).json({
		success: true,
		payload: newTansaction,
	})
})

export default router
