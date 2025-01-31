import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () => {
    try{

        console.log("MongoDB URI:", process.env.MONGO_DB_URL);
       await mongoose.connect(process.env.MONGO_DB_URL);
       console.log("connected to MongoDB")
        
    }catch(error){
        console.log("Error Connecting mongodb",error.message)
    }
}

export default connectToMongoDB;