const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://saibalaji:DDWZYEIX7oWlzRoP@cluster0.245dy24.mongodb.net/blogsDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB