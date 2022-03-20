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
export async function addTransaction(text, amount) {
	const newTransaction = {
		id: Math.random() * 10000,
		text,
		amount,
	}
	return newTransaction
}
//delete transaction by id DELETE

export async function deleteTransaction(id) {
	const deletedTransaction = allTransactions.filter(item => item.id !== id)

	return deletedTransaction
}
