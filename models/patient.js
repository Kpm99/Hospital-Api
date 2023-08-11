const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        
    },
    phone:{
        type:String,
        require:true,
        
    },
   


},{
    timestamps:true
})

const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient