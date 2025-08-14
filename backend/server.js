require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')

const PORT = process.env.PORT 

connectToDB()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

app.listen(PORT, () => {
  console.log("Servers succesfully started at server", PORT)
})