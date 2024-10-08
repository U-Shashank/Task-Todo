const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to the database")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB