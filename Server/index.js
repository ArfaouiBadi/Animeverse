const express = require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const app = express()
const _PORT = 3001;
const cors = require("cors")
app.use(cors())
app.use(express.json())



// CONNECT TO DB
const   usernameDB = "arfaouibadi19",
        password = "rFJ6cq541qfMfOmw",
        database = "Animeverse";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${usernameDB}:${password}@cluster0.fevcghn.mongodb.net/${database}?retryWrites=true&w=majority`)


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
        password:hashedPassword,
        username,
        birth,
        role, 
     })
     await newUser.save();
     return res.json({message:"user created succefully"})




     
})
app.post("/login",async(req,res)=>{
    const {username,email,password}=req.body
    const user=await UserModel.findOne({email})
    
    if(!user){
       return res.json({message:"user dosn't exists"})
    }
    const isPasswordValid =await bcrypt.compare(password,user.password)
    
    if(!isPasswordValid){
        return res.json({message:"Username or password is not correct"}) } 
    const token = jwt.sign({id:user._id},usernameDB)
    return res.json({token,userid:user._id})
})

app.listen(_PORT, ()=>{
    console.log("Server Works")
})

app.listen(3002, () => console.log(`🟢 server started on port 3002`))