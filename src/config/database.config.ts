import mongoose from "mongoose";

/**
 * Connect to MongoDB using Mongoose.
 * @param {string} uri - The MongoDB connection string.
 */
export const connectToDatabase = async (uri: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to database");
  } catch (error) {
    console.error("Mongodb connection error:", error);
    process.exit(1);
  }
};
