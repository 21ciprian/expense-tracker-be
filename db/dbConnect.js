import colors from 'colors'
import mongoose from 'mongoose'
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(
			colors.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`)
		)
	} catch (error) {
		console.log(colors.red(`Error: ${error.message}`))
		process.exit(1)
	}
}
export default connectDB
