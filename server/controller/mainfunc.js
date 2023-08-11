const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
let saltround=10;
let storedarr=[];
let secretkey="v@m$hi"
let arr=[1,2,3,4,5]
const  register=(req,res)=>{
    let registerdata=req.body;

    //now we will be finding wheather the user is their in the array or not
    let user=storedarr.find(item=>{
        if(item.email===registerdata.email){
            return item;
        }
    })

    //If the user email id is matching in storedarr
    if(user){
   return    res.send({msg:"User already exists"})
    }
    //Now the case comes that user is not existing in the stored addarr
    if(registerdata.email){
const hashpassword=bcrypt.hashSync(registerdata.password,saltround)
if(registerdata.password){ 
let tempobj={

        email:registerdata.email,
        password:hashpassword
    }
storedarr.push(tempobj)
return res.send(tempobj);
}
}
return res.send("Enter all the details to register")
}

const login=(req,res)=>{
    //we use req.body to get details from client
const logindata=req.body
const {email,password}=logindata;
console.log(password);
const user=storedarr.find(item=>{
    if(item.email===email){
    return item
}
})
//if user exists 
if(user){
    const validate=bcrypt.compareSync(logindata.password,user.password)
    const token=jwt.sign({user:user.email},secretkey,{expiresIn:4500})
    if(validate){
        const userinfo={
            email:user.email,
            password:user.password,
            token:token
        }
        return res.send(userinfo);
    }
    //if password is not matching
    else{
        return res.send("Invalid password")
    }
}
//if user doesnot exits
else{
    return res.send('User is not registered')
}

}
const home=(req,res)=>{
    res.send(arr);
}



const logout=(req,res)=>{
    res.status(200).send("User loggged out")
}

module.exports={register,login,logout,home}