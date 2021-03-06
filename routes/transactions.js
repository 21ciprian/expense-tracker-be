import express from 'express'
import * as transactions from '../controllers/transactionController.js'
const router = express.Router()
router.get('/', async (req, res) => {
	try {
		const allTransactions = await transactions.getTransactions()
		res.status(200).json({
			success: true,
			payload: allTransactions,
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server Error`,
		})
	}
})
router.post('/', async (req, res) => {
	try {
		const {text, amount} = req.body
		const newTransaction = await transactions.addTransaction(req.body)
		const allTransactions = await transactions.getTransactions()
		res.status(201).json({
			success: true,
			payload: newTransaction,
			all: allTransactions,
		})
	} catch (error) {
		if (error.name === 'ValidationError') {
			const messages = Object.values(error.errors).map(val => val.message)
			console.log('error messages: ', messages)
			return res.status(400).json({
				success: false,
				error: messages,
			})
		} else {
			return res.status(500).json({
				success: false,
				error: `Server Error`,
			})
		}
	}
})
router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const deletedTansaction = await transactions.deleteTransaction(id)
		if (!deletedTansaction) {
			return res.status(404).json({
				success: false,
				error: 'No transaction found',
			})
		} else {
			await deletedTansaction.remove()
			res.status(200).json({
				success: true,
				payload: deletedTansaction,
			})
		}
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server Error`,
		})
	}
})

export default router
