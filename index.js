const express=require('express');
//define port
const port=process.env.PORT || 8000;
const app=express();
//require mongoose
const db=require('./config/mongoose');

// const session=require('express-session');

app.use(express.json())
app.use(express.urlencoded())

//setting up routes
app.use('/',require('./routes'))

//setting server

app.listen(port,function(err){
    if(err){
        console.log('error')
    }
    console.log("server running on port," ,port)
})

