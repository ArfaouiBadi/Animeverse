const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bcrypt=require("bcrypt")
const createToken = (user) => {
  return jwt.sign({ id:user._id,isAdmin:user.isAdmin }, "Animeverse", { expiresIn: "3d" });
};

const UserModel = require('../models/user')
const register = async (req, res) => {
  const {username,lastName,email,password,firstName,role,birth,address,phone}=req.body
  console.log({username,lastName,email,password,firstName,role,birth,address,phone})
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists" });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser=new UserModel({
    userName:username,
    firstName:firstName,
    lastName:lastName,
    phone,
    address,
    email,
    isAdmin:false,
    password:hashedPassword,
    username,
    birth,
    role, 
 })
  await newUser.save();
  return res.json({ message: "user created succefully" });
};

const login = async (req, res) => {
  const { username, email, password} = req.body;
  const Loguser = await UserModel.findOne({ email });
  if (!Loguser) {
    return res.json({ message: "User dosn't exists" });
  }
  const isPasswordValid = await bcrypt.compare(password, Loguser.password);
  if (!isPasswordValid) {
    return res.json({
      message: "Username or password is not correct",
    });
  }
  const token = createToken(Loguser);
  const { ...others } = Loguser._doc;
  res.status(200).json({...others, token});
  
};

module.exports = { login, register };
