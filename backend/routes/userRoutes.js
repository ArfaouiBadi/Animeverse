const express = require("express");
const bcrypt=require("bcrypt")
const { login, register } = require("../controller/userController");
const { verifyTokenAndAuthorization,verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

//login
router.post("/login", login);
//signe up




router.post("/register", register);



const UserModel = require('../models/user')

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password,10)
    }
    
    try {
        
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
        
      );
      
      res.status(200).json("User has been Updated...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      console.log(user)
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await UserModel.find().sort({ _id: -1 }).limit(5)
        : await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET USER STATS
  
  router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await UserModel.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;
