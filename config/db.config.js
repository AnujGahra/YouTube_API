import mongoose from "mongoose";

export const ConnectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ✅");
    } catch (error) {
        console.log((error.message));
        // throw new Error("Something went wrong", error);
    }
}