const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/learnRestApiMongoose";
mongoose.connect(uri).then(()=>console.log("mongodb connect")).catch((error) => {
    console.log("no connect");
    console.log(error.message);
})