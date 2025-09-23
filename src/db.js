// this file contains the information about the db string

const mongoose = require('mongoose')
const mongooseURI = 'mongodb://localhost:27017/?directConnection=true'

const connectToMongo = async() => {
    try {
        
        await mongoose.connect(mongooseURI)
        console.log("The server is up and running")

    } catch (error) {

        console.log(`The server is not responding ${error}`)

    }
}

module.exports = connectToMongo;