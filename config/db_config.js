require('dotenv').config()

const mongoose = require('mongoose')

const db_connection  = mongoose.connect(process.env.DB_URL, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
    })
    .then(() => console.log("Database successfully connected "))
    .catch(err => console.log(`Connection failed: ${err}`))

module.exports = db_connection   