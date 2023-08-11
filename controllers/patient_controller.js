const Patient=require('../models/patient');
//create new patient
module.exports.create_patient=async function(req,res){
    try{
    const patient=await Patient.findOne({email:req.body.email});
    if(!patient){
        await Patient.create(req.body);
        
        return res.status(201).json({message:"patient created"});
    }
    else{
        return res.status(201).json(patient)
    }
}
catch(err){
    res.status(400).json({message:"error"})
}
}

