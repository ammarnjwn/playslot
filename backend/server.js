require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db')

const PORT = process.env.PORT 

connectToDB()

app.listen(PORT, () => {
  console.log("Servers succesfully started at server", PORT)
})