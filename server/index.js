const express = require("express");
const router = require('./routes/fileRoutes')
const cors = require('cors')
const MONGO_CONFIG = require('./config/Db')
const PORT = 8000;

const app = express();
app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["GET", "POST"],
    credentials:true
}))
MONGO_CONFIG()
app.use('',router)

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
});