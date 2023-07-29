const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bcrypt=require("bcrypt")
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
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
  await newUser.save();
  return res.json({ message: "user created succefully" });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  const Loguser = await UserModel.findOne({ email });
  if (!Loguser) {
    return res.json({ message: "user dosn't exists" });
  }
  const isPasswordValid = await bcrypt.compare(password, Loguser.password);
  if (!isPasswordValid) {
    return res.json({
      message: "Username or password is not correct",
    });
  }
  const token = createToken(Loguser._id);
  res.status(201).json({ email, token });
};

module.exports = { login, register };
