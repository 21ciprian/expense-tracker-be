import mongoose from 'mongoose'
const TransactionSchema = new mongoose.Schema({
	transactionName: {
		type: String,
		trim: true,
		required: [ true, 'Please add a name to your transaction' ],
	},
	description: {
		type: String,
		trim: true,
		required: [ true, 'Please add a description to your transaction' ],
	},
	venue: {
		type: String,
		trim: true,
	},
	date: {
		type: String,
		trim: true,
		required: [ true, 'Please add a date to your transaction' ],
	},
	amount: {
		type: Number,
		required: true,
		required: [ true, 'Please add an amount' ],
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
})
export default mongoose.model('Transaction', TransactionSchema)
