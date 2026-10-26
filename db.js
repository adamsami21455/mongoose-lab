const mongoose = require('mongoose');
const dotenv=require ('dotenv').config()


async function connectToDB() {
    try { 
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Connected to Database")

    }
    catch(err) {
        console.log("Error occured", err)

    }
}

module.exports = connectToDB