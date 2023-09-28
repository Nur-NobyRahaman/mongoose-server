const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
require('./src/dbCon')
const productRouter = require('./src/routes/Producrs');
const userRouter = require('./src/routes/Users')
const User=require('./src/Model/User')
const Port = process.env.Port || 5000;

app.use(express.json())
app.use(productRouter)
app.use(userRouter)


app.get('/', (req, res) => {
    res.send('Hello I am learning to mongodb mongoose!')
})

app.get('/users',async(req,res)=>{
    try {
        const userDate= await User.find();
        if(userDate){
            res.status(200).send(userDate)
        }
        else{
            res.status(404).send({message: "failed"}) 
        }
    } catch (error) {
        res.status(404).send({message: error.message})
    }
   
})

app.listen(Port, () => {
    console.log(`mongoose app listening on port ${Port}`)
})