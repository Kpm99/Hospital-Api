const Doctor=require('../models/doctor')
const jwt=require('jsonwebtoken')


//doctors profile page
module.exports.profile=function(req,res){
    return res.send("<h1>profile page</h1>")
}

//creating new ID
module.exports.create=async function(req,res){
    try{
    const doctor=await Doctor.findOne({email:req.body.email});
    if(!doctor){
        await Doctor.create(req.body)
        return res.status(201).json({message:'success'})
    }
    else{
        return res.status(400).json({message:"user is already present"})
    }
}
catch(err){
    res.status(400).json({message:"error in creating user"})
}
}

//creating session 
module.exports.create_session=async function(req,res){
   const user=await Doctor.findOne({email:req.body.email})
    if(!user || user.password!=req.body.password){
        return res.status(400).json({message:"Invalid password/Username"})
    }

    return res.json(201,{message:"session created",data:{token:jwt.sign(user.toJSON(),'project2',{expiresIn:"10000"})}})

}

