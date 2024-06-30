const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGO_CONFIG = process.env.MONGODB_URL
mongoose.set('strictQuery', true);
const ConnectToDb = async() =>{
    try {
        await mongoose.connect(MONGO_CONFIG)
        console.log(`Server is running on ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`DB connection Failed`, error.message)
        
    }
}
module.exports=ConnectToDb;


