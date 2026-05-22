
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();







//                             without db file                       //
// import mongoose from "mongoose";    
// import {DB_NAME} from "../constant.js";
// import express from "express";
// const app = express()

// const connectDB = async() => {
//     try{
//             await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
//             app.on ("error" , (error) => {
//                 console.log("error", error);
//                 throw error ;
//             } )
//             app.listen (process.env.PORT, ()=>{
//                 console.log(`the app is listening on port ${process.env.PORT}`);
//             })
//     }catch(error){
//         console.log("connection ERROR",)
//         process.exit(1);                      // 0 ok /1 means failure.
//     }

// }














import mongoose from "mongoose";

;(async() => {
    try{
mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`)

    }catch(error){

        console.log("ERROR", error);
        throw error;

    }
})()
