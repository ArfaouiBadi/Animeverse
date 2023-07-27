const { verifyToken,verifyTokenAndAuth } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id",verifyTokenAndAuth,async (req,res)=>{
    
})