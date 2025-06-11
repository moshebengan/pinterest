import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO DB CONNECTED")
        
    } catch (err) {
        console.log("MONGO DB CONNECTION ERROR", err)
        
    }
}

export default connectDB;