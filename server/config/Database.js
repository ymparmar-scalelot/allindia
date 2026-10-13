import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const DBURI = process.env.MONGO_URI || "mongodb://localhost:27017/saas"
        const connection = await mongoose.connect(DBURI)
        console.log("✅ Database connected successfully")
    } catch (error) {
        console.error(`❌ error establising connection ${error.message}`)
    }
    const db = mongoose.connection;
    db.on("error", (error) => {
        console.error(`mongodb runtime error: ${error}`)
    })
    db.on("disconnected", () => {
        console.error(`mongodb disconnected`)
    })

    mongoose.set('runValidators', true);
    mongoose.set('strictQuery', false);

}

export default connectDB