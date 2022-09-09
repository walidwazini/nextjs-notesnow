import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(process.env.CLOUD_MONGODB_URI)
}

export default connectMongo