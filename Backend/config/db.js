import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URl);
    console.log("MongoDB connection is successful");
  } catch (error) {
    console.log("Connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
