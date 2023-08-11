const mongoose=require('mongoose');

const reportSchema=new mongoose.Schema({
    
    
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Patient`
    },
  
   status:{
    type:String,
    require:true

   },
 


},{
    timestamps:true
})

const Report=mongoose.model('Report',reportSchema);
module.exports=Report