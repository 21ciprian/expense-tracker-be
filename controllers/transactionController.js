import Transaction from '../models/Transaction.js'
//get all transactions GET
const allTransactions = [
	{ id: 1, text: 'phone', amount: 300 },
	{ id: 2, text: 'book', amount: 10 },
]
export async function getTransactions(id) {
	const transactions = await Transaction.find().where(
		{
			id,
		},
		(error, data) => {
			if (error)
			{
				console.log('error from transaction.find: ', error)
			} else
			{
				console.log('data from transaction.find: ', data)
			}
		}
	)
	return transactions
}
//add transaction POST
export async function addTransaction(body) {
	const newTransaction = await Transaction.create(body)

	return newTransaction
}
//delete transaction by id DELETE

export async function updateTransaction(id, tid) {
	const updatedTransaction = await Transaction.findById(tid)

	return updatedTransaction
}
export async function deleteTransaction(id, tid) {
	const deletedTransaction = await Transaction.findById(tid)
	return deletedTransaction
}
