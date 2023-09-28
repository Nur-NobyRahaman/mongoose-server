const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('./src/dbCon')
const productRouter = require('./src/routes/Producrs');
const userRouter = require('./src/routes/Users')
const port = 5000;

app.use(express.json())
app.use(productRouter)
app.use(userRouter)


app.get('/', (req, res) => {
    res.send('Hello I am learning to mongodb mongoose!')
})

app.listen(port, () => {
    console.log(`mongoose app listening on port ${port}`)
})