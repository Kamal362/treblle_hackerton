require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const routes = require('./routes/route')
const config = require('./config/db_config')
const coockieParser = require("cookie-parser")
const { useTreblle } = require('treblle')

//middlewares
app.use(express.json())
app.use(coockieParser())

// connect to db
config.db_connection

// setting all routes
app.use('/api', routes)

// connection to treblle
useTreblle(app, {
  apiKey: process.env.TREBLLE_APL_KEY,
  projectId: process.env.PROJECT_API_KEY,
})

app.listen(PORT, (err, res)=>{
    if (err) throw err
    console.log(` app listening on ${PORT}....`)
})
