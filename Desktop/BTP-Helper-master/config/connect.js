const mongoose = require("mongoose")
config = require("config")

const MONGO_URI = config.get("MONGO_URI")

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            },
            (err) => err ?
            console.error(err) :
            console.log("mongoose connected"));

    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;