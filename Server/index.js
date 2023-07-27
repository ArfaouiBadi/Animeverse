const express = require("express")
const dotenv = require("dotenv")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const app = express()
dotenv.config()
const cors = require("cors")
app.use(cors())
app.use(express.json())



// CONNECT TO DB

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connection Successfully")
}).catch((err)=>{
    console.log(err)
})


// USER MODEL
const UserModel = require('./models/user')
// Register
app.post("/register", async (req, res)=>{
     const {username,email,password,firstName,lastName,role,birth,address,phone}=req.body
     const user=await UserModel.findOne({email})
     if(user){
        return res.json({message:"user already exists"})
     }
     const hashedPassword=bcrypt.hashSync(password,10)
     const newUser=new UserModel({
        firstname:firstName,
        lastname:lastName,
        phone,
        address,
        email,
        isAdmin:false,
        password:hashedPassword,
        username,
        birth,
        role, 
     })
     try{
        await newUser.save();
        return res.status(201).json({message:"user created succefully"})
     }
     catch(err){
        console.log(err)
     }

})
app.post("/login",async(req,res)=>{
    const {username,email,password}=req.body
    const user=await UserModel.findOne({email})
    
    if(!user){
       return res.status(404).json({message:"user dosn't exists"})
    }
    const isPasswordValid =await bcrypt.compare(password,user.password)
    
    if(!isPasswordValid){
        return res.status(401 ).json({message:"Username or password is not correct"}) } 
    const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SEC,{expiresIn:"3d"})
    return res.json({token,userid:user._id})
})

app.listen(3002, () => console.log(`🟢 server started on port 3002`))