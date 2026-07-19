const User = require("../models/user.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


async function handleSignup(req, res){
    const { name, email, password } = req.body

    const hasedPassword = await bcrypt.hash(password, 10)

    await User.create({name, email, password:hasedPassword})
    res.json({
        success:true,
        message:"User Register Successfully!!"
    })
}
async function handleLogin(req, res){
    const { email, password } = req.body

    const user = await User.findOne({email})
    console.log(user)

    if(!user){
        return res.status(400).json({message:"Inavalid Credentials"})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)

    if(!isMatch){
        return res.status(400).json({message:"Inavalid Credentials"})
    }

    const token = jwt.sign(
        {id: user._id, role:user.role},
        process.env.SECRET_KEY,
        {expiresIn:"1d"}
    )
    
    res.cookie("token", token, {
        httpOnly:true,
        secure:false,
        sameSite:"lax"

    })
    res.json({message:"LOgin Successful!!"})
}

module.exports = {handleSignup,handleLogin}