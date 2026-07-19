


let adminOnly = (req, res, next)=>{
    if(req.user.role !== "admin"){
        res.status(400).json({
            message : "Admin only can access"
        })
    }
    next()
}

module.exports = adminOnly