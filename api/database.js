import mongoose from "mongoose";

//Connection
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log('Error connecting to database', error);
    }
};