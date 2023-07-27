const jwt=require("jsonwebtoken")
const verifyToken = (req,res,next)=>{
    const authHeader=req.headers.token
    
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.satuts(403).json({message:"token is not valid"});
            req.user=user;
            next()
        })
    }
    else{
        return res.satuts(401).json({message:"you are not authentificated !"})
    }
}

const verifyTokenAndAuth= async (req,res,next)=>{
        if(req.body.password){
            req.body.password=bcrypt.hashSync(req.body.password,10)
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedUser)
        }catch(err){
            res.status(500).json(err)
        }
    }
    

module.exports={verifyToken,verifyTokenAndAuth};
