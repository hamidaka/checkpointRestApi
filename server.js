const express = require ('express')
const app = express()
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()
require('./confiig/connectDB')
//routes
const userRoutes = require("./routes/userRoutes")
app.use("/api/v1/users",userRoutes)

app.listen(3000,()=>console.log('server is running on port 3000'));

