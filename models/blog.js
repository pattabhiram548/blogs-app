const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})

const Blog = mongoose.model("blog", BlogSchema )
module.exports = Blog