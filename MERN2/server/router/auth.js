const jwt =require('jsonwebtoken')
const express = require('express');
const User = require('../db/userSchema');
const router = express.Router();
const bycrpt =  require('bcrypt');

require("../db/conn");

router.get('/',(req,res)=>{
    res.send("auth");
})

  //using promises
        
    // User.findOne({email:email}).then((exist)=>{
    //     if(exist){
    //         return res.status(402).json({error:"already exist"})
    //     }
    //     else{
    //         const user = new User({username,email,fname,lname,city,password,confirmpassword});

    //         user.save().then(()=>{
    //             return res.status(201).json({message:"Succesfull"});
    //         }).catch((err)=>{
    //             res.status(500).json({error:"failed"})
    //         })
    //     }
    // }).catch(err =>{console.log(err);});

router.post('/register',async (req,res)=>{
    const{username,email,fname,lname,pnum,state,city,dist,DOB,password,cpass} = req.body;
    console.log("rquest: " + req.body);
    if(!username|| !email|| !fname|| !lname|| !pnum ||!state ||!city||!dist|| !DOB|| !password){
        return res.status(422).json({error:"fill the form"});
    }
    //using await
    try{
    const emailmatch = await User.findOne({email:email});
    if(emailmatch){
        return res.status(402).json({error:"already exist"})
    }
    else if(password!=cpass){
        return res.json({error:"password mismatch"})
    }
    else{
        const user = new User({username,email,fname,lname,pnum,state,city,dist,DOB,password});
        await user.save();        
        res.status(201).json({message:"Succesfull"});

    }
                  
}catch(err){
    console.log(err);
}
})

router.post("/login",async (req,res)=>{
    // console.log(req.body);
    // res.json({message:"login succesfull"})
    const{email,password} = req.body;
    try{
        let token;
        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const verifypass =  bycrpt.compare('password',userLogin.cpass);
            token =  await userLogin.generateAuthToken();
            console.log(token);
            if(!verifypass){
                return res.json({error:"invalid Credentials"});
            }else{
                return res.json({message:"succesful login"});
            }
        } 
        else{
            return res.status(400).json({error:"Invalid Credentials"})
        }
    }catch(err){
        console.log(err);
    }
})



module.exports=router;
