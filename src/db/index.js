import mongoose from 'mongoose';
import {DB_NAME} from  "../constant.js";


const DbConnection = async () => {

    try{
        const connectionInstance = await mongoose.connect (`${process.env.MONGODB_URI} / ${DB_NAME}`)
        console.log("DB connected sucsessfully");
        console.log(`\n MOngoose connected !! DB_host : ${connectionInstance.connection.host} \n`);
    }
    catch(error){
        console.error("Error connecting to DB:", error);
        process.exit(1);
    }
}   
export default DbConnection;