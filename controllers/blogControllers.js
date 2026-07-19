const Blog = require("../models/blog.js")

async function handleGetAllBlogs(req, res){
    console.log(`from handleGetAllBlogs`, req.user)

    const allBlogs = await Blog.find({user:req.user._id})
    res.json(allBlogs)
}

async function handlePostBlog(req, res){
    const newBlog = await Blog.create({
        ...req.body,
        user: req.user._id
    })
    console.log(newBlog)
    res.json({
        success:true,
        message:"Blog added successfully!!",
        blog:newBlog
    })
}

async function handleDeleteBlog(req, res){
    const id  = req.params.id
    const deletedBlog = await Blog.findByIdAndDelete(id)
    res.json({
        success:true,
        message:"Blog deleted successfully!!!",
        blog:deletedBlog
    })
}

async function handleUpdateBlog(req,res){
    const id = req.params.id
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {new:true})
    res.json({
        success:true,
        meassge:"Blog updated successfulyy!!",
        blog:updatedBlog
    })
}

async function handleGetSingleBlog(req, res){
    const blog = await Blog.findById(req.params.id)
    res.json(blog)
}

module.exports = {handleGetAllBlogs, handlePostBlog, handleDeleteBlog, handleUpdateBlog, handleGetSingleBlog}