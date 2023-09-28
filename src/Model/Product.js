const mongoose= require('mongoose')
const productSchema = mongoose.Schema({
    title:{
        type:String,
        require: true,
        minLength:3,
        maxLength:100,
        trim: true,
    },
    price:{
        type:Number,
        require: true,
    },
    description:{
        type:String,
        require: true,
    },
    cratedAt:{
        type:Date,
        default: Date.now()
    }
})
const Product = mongoose.model('Products',productSchema);
module.exports = Product