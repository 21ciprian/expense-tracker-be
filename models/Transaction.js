import mongoose from 'mongoose'
const TransactionSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, 'Please add text'],
	},
	amount: {
		type: Number,
		required: true,
		required: [true, 'Please add a positive or negative number'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})
export default mongoose.model('Transaction', TransactionSchema)
