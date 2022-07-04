const express=require('express');
const app=express();
const dotenv = require("dotenv");

dotenv.config({path:'./server/router/config.env'});

require("./server/db/conn");

app.use(express.json());
app.use(require('./server/router/auth'));

const PORT = process.env.PORT;

// const middleware = (req,res,next)=>{
//     console.log('middleware');
//     next();
// }
// app.get("/",middleware,function(req,res){
//     res.send("<h1>homed</h1>");
// })
// app.get("/aboutus",function(req,res){
//     res.cookie("test","sam");
//     res.send("<h1>about</h1>");
// })
// app.get("/login",function(req,res){
//     res.send("<h1>login</h1>");
// })
app.get("/register",function(req,res){
    res.send("<h1>register</h1>");
})

app.listen(PORT,function(h){
    console.log(PORT);
})