//get all transactions GET
export async function getTransactions() {
	return 'GET transactons'
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
