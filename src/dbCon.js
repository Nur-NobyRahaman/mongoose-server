const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/learnRestApiMongoose";
mongoose.connect(uri).then(()=>console.log("mongodb connect")).catch((error) => {
    console.log("no connect");
    console.log(error.message);
})