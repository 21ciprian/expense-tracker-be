import Transaction from '../models/Transaction.js'
//get all transactions GET
const allTransactions = [
	{id: 1, text: 'phone', amount: 300},
	{id: 2, text: 'book', amount: 10},
]
export async function getTransactions() {
	const transactions = await Transaction.find()
	return transactions
}
//add transaction POST
export async function addTransaction(body) {
	const newTransaction = await Transaction.create(body)
	console.log('newTransaction: ', newTransaction)
	return newTransaction
}
//delete transaction by id DELETE

export async function deleteTransaction(id) {
	const deletedTransaction = allTransactions.filter(item => item.id !== id)

	return deletedTransaction
}
