const jwt = require('jsonwebtoken')
let User = require('../models/user.js')

const authMiddleware = async (req, res, next)=>{
    try{
        const token = req.cookies.token
        if(!token){
            return res.json({
                success:false,
                message:"Please Login first"
            })
        }
        console.log(token)
        const decodedData = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decodedData)

        let loggedInUser = await User.findById(decodedData.id)

        if(!loggedInUser){
            res.json({
                success:false,
                message:"User not found"
            })
        }

        req.user = loggedInUser
        next()
        
    }catch(err){
        return res.json({
            success:false,
            message:"Inavid Token or Expired Token"
        })
    }
    
}

module.exports = authMiddleware