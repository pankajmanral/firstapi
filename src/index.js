// this file is the entry point 

const connectionFunction = require('./db')
connectionFunction()

const express = require('express')
const app = express()
app.use(express.json())

const port = 3000

app.use('/api/user', require('./Routes/user'))

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`)
})