const express=require('express');
const router = express.Router();
const User = require('../Model/User')

// post user
router.post('/users',async(req,res)=>{
    try {
        const user = req.body;
        console.log(user)
        const newUser = new User(user);
        const userData = await newUser.save();
        res.send(userData)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// get all user
router.get('/users',async(req,res)=>{
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

module.exports=router;