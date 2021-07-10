const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')
const start =async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), { useNewUrlParser: true, useUnifiedTopology: true } )
        app.listen(PORT, () => {
            console.log(`server start on PORT:${PORT}`)
        })
    } catch (error) {
        console.warn('error', error)
    }
}

start()