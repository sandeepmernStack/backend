import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
dotenv.config();

const connectDB = async ()=>{
  try {
    const connectionInstanse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Connection successfull ${connectionInstanse.connection.host}`)
  } catch (error) {
    console.log("Connection failed", error)
    throw error;
    
  }
}


connectDB()


export default connectDB;