const Report=require('../models/report')


//creating new report
module.exports.create_report=async function(req,res){
    const report = await Report.create(req.body); 
    return res.status(201).json({message:"report created"});
    
    
}
//show all reports of a patient
module.exports.all_report= async function(req,res){
const report=await Report.find({patientId:req.params.id});
    console.log(report)
    return res.send(report)
}
//shows status
module.exports.status=async function(req,res){
    const report=await Report.find({status:req.params.status});
        console.log(report)
        return res.status(201).json(report)
    }