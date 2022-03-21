import colors from 'colors'
import mongoose from 'mongoose'
const uri = process.env.MONGODB_URI
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(uri)
		console.log(
			colors.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`)
		)
	} catch (error) {
		console.log(colors.red(`Error: ${error.message}`))
		process.exit(1)
	}
}
export default connectDB
