const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Email is required'],
        minLength :3,
        maxLength: 100,
        trim:true
    },
    email:{
        type:String,
        required:true,
        minLength :3,
        maxLength: 100,
        unique: true
    },
    phone:{
        type:Number,
        required:true,
        min:3 
       
    },
})
const User = mongoose.model('User',userSchema);
module.exports=User;















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































