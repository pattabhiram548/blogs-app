let Blog = require("../models/blog.js");

async function handleAdmin(req, res) {
   const allBlogs = await Blog.find().populate(
    "user",
    "name email role"
);

    res.json(allBlogs);
}

module.exports = { handleAdmin };

