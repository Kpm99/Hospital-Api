const express=require('express');
//define port
const port=8000;
const app=express();
//require mongoose
const db=require('./config/mongoose');

// const session=require('express-session');

app.use(express.json())
app.use(express.urlencoded())

//setting up routes
app.use('/',require('./routes'))

//setting server

app.listen(8000,function(err){
    if(err){
        console.log('error')
    }
    console.log("server running on port," ,port)
})

