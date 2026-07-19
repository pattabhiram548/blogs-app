const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    }
}, {timestamps:true})

const User = mongoose.model('user', userSchema)
module.exports = User