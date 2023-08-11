const express=require('express');
const app=express();
const cors=require('cors');
//Importing route and using router middleware
const route=require('./route/routes');
const { login } = require('./controller/mainfunc');
app.use(route);
//Express.json mw is used below to read json data from client
app.use(express.json())

//We use cors mw below
app.use(
    cors({
        orgin:'*'
    }))
    
//getting the basic message on localhost
app.get('/',(req,res)=>{
    res.send("Default path")
})

app.use('/user',route)
app.use("/home",route)


app.listen(3012,()=>{
    console.log('Server is listening a port 3012');
})