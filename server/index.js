// const express = require("express");
// const router = require('./routes/fileRoutes')
// const cors = require('cors')
// const MONGO_CONFIG = require('./config/Db')
// const PORT = 8000;

// const app = express();
// app.use(cors({
//     origin: ["https://deploy-mern-1whq.vercel.app"],
//     methods: ["GET", "POST"],
//     credentials:true
// }))
// MONGO_CONFIG()
// app.use('',router)

// app.listen(PORT, ()=>{
//     console.log(`Server is running on Port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const mongoUri = process.env.MONGODB_URL;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
    