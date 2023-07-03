import mongoose from "mongoose";

mongoose.set('strictQuery',false);
export const connectDB = (URI)=>{
    return mongoose.connect(URI)
}