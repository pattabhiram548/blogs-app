const express = require('express')
const app = express()

const connectDB = require("./db/connection.js")
const dotenv = require('dotenv')
const Blog = require("./models/blog.js")
const {handleSignup, handleLogin} = require('./controllers/authControllers.js')
const {handleGetAllBlogs, handlePostBlog, handleDeleteBlog, handleUpdateBlog, handleGetSingleBlog} = require('./controllers/blogControllers.js')
const {handleAdmin} = require("./controllers/adminController.js")
const cors = require('cors')
let cookieParser = require('cookie-parser')
const authMiddleware = require("./middleware/auth.js")
const adminOnly = require("./middleware/admin.js")
app.use(cookieParser())
dotenv.config()
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res)=>{
    res.send("API is running.....")
})

app.get("/api/blogs", authMiddleware,handleGetAllBlogs)
app.post("/api/blogs",authMiddleware,  handlePostBlog)
app.get("/api/blogs/:id",authMiddleware,  handleGetSingleBlog)
app.delete("/api/blogs/:id",authMiddleware, handleDeleteBlog)
app.put('/api/blogs/:id',authMiddleware, handleUpdateBlog)


app.post('/auth/signup', handleSignup)
app.post('/auth/login', handleLogin)


app.get("/api/admin",authMiddleware,adminOnly, handleAdmin)

module.exports = app;