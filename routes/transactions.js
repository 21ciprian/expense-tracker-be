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
	const {text, amount} = req.body
	const newTansaction = await transactions.addTransaction(text, amount)
	const allTransactions = await transactions.getTransactions()
	res.status(200).json({
		success: true,
		payload: newTansaction,
		all: allTransactions,
	})
})

export default router
