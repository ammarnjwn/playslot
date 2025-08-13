const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected succesfully!!')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = connectToDB