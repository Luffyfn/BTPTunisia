const express = require('express')
const app = express()

const connectDB = require('./config/connect')
const moe = require("./routes/moe")
const auth = require("./routes/auth")

//data base connection
connectDB()

//body-parser
app.use(express.json())

//routes
app.use("/api/moe", moe)
app.use("/api/auth", auth)


//run server
const port= process.env.PORT||5000

app.listen(port,(err)=>{
    err
        ?console.log("cannot connect to server")
        :console.log(`server is runnig on port ${port}`)
    })