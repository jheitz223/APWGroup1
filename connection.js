const mongoose = require('mongoose');

const URI = "mongodb+srv://JavaScript:1234@cluster0.fvgga.mongodb.net/js_db?retryWrites=true&w=majority"

const connectDB = ()=>{
    await mongoose.connect(URI);
    console.log('DB CONNECTED..!');
};

module.scports = connectDB;