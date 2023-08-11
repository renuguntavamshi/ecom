const {register,login,logout,home}=require('../controller/mainfunc')
const route=require('express').Router();
route.post('/register',register)
route.post('/login',login)
route.post('/logout',logout)
route.get("/home",home)

module.exports=route;