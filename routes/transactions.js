import express from 'express'
import * as transactions from '../controllers/transactionController.js'
const router = express.Router()
router.get('/:id/transactions', async (req, res) => {
	try {
		const allTransactions = await transactions.getTransactions(req.params.id)
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
router.post('/:id/transactions', async (req, res) => {
	console.log('req.body router post: ', req.body)
	try {
		const newTransaction = await transactions.addTransaction(
			req.body,
			req.params.id
		)
		const allTransactions = await transactions.getTransactions(req.params.id)
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
router.delete('/:id/transactions/:tid', async (req, res) => {
	try {
		const {id, tid} = req.params
		const deletedTansaction = await transactions.deleteTransaction(id, tid)
		console.log('deletedTansaction: ', deletedTansaction)
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
		return deletedTansaction
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server Error`,
		})
	}
})
router.patch('/:id/transactions/:tid', async (req, res) => {
	try {
		const {id, tid} = req.params
		const updatedTransaction = await transactions.updateTransaction(id, tid)
		console.log('updatedTransaction: ', updatedTransaction)
		const testObj = Object.assign(updatedTransaction, req.body)
		console.log('testObj: ', testObj)
		if (!updatedTransaction) {
			return res.status(404).json({
				success: false,
				error: 'No transaction found',
			})
		} else {
			await testObj.save()
			res.status(200).json({
				success: true,
				payload: testObj,
			})
		}
		return testObj
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server Error`,
		})
	}
})

export default router
