//require mongoose
const mongoose=require('mongoose');
//connecting database
mongoose.connect('mongodb://127.0.0.1/project2');

const db=mongoose.connection;
//checking error
db.on('error',console.error.bind(console,'error in connectiong to db'));
//if no error is present
db.once('open',function(){
console.log('connected to database')
});

module.exports=db